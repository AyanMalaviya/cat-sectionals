import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, Minus, Calculator as CalcIcon, Delete, GripHorizontal } from 'lucide-react';

interface VirtualCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Evaluates mathematical expressions adhering strictly to BODMAS order of operations.
 * Handles +, -, *, /, parentheses, and decimals.
 */
export function evaluateMath(expression: string): number {
  const expr = expression
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/−/g, '-')
    .replace(/\s+/g, '');

  if (!expr) return 0;

  // Tokenize numbers, operators, parens
  const tokens: (number | string)[] = [];
  let i = 0;
  while (i < expr.length) {
    const ch = expr[i];

    if ('+-*/()'.includes(ch)) {
      // Check for unary minus: at start or after an operator or '('
      if (ch === '-' && (tokens.length === 0 || '+-*/('.includes(String(tokens[tokens.length - 1])))) {
        let numStr = '-';
        i++;
        while (i < expr.length && /[\d.]/.test(expr[i])) {
          numStr += expr[i];
          i++;
        }
        if (numStr === '-') {
          tokens.push(-1);
          tokens.push('*');
        } else {
          tokens.push(parseFloat(numStr));
        }
        continue;
      }
      tokens.push(ch);
      i++;
    } else if (/[\d.]/.test(ch)) {
      let numStr = '';
      while (i < expr.length && /[\d.]/.test(expr[i])) {
        numStr += expr[i];
        i++;
      }
      tokens.push(parseFloat(numStr));
    } else {
      i++;
    }
  }

  // Shunting-Yard Algorithm to convert infix to RPN
  const outputQueue: (number | string)[] = [];
  const opStack: string[] = [];

  const precedence: Record<string, number> = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };

  for (const token of tokens) {
    if (typeof token === 'number') {
      outputQueue.push(token);
    } else if ('+-*/'.includes(token)) {
      while (
        opStack.length > 0 &&
        opStack[opStack.length - 1] !== '(' &&
        precedence[opStack[opStack.length - 1]] >= precedence[token]
      ) {
        outputQueue.push(opStack.pop()!);
      }
      opStack.push(token);
    } else if (token === '(') {
      opStack.push(token);
    } else if (token === ')') {
      while (opStack.length > 0 && opStack[opStack.length - 1] !== '(') {
        outputQueue.push(opStack.pop()!);
      }
      if (opStack[opStack.length - 1] === '(') {
        opStack.pop();
      }
    }
  }

  while (opStack.length > 0) {
    const op = opStack.pop()!;
    if (op !== '(' && op !== ')') {
      outputQueue.push(op);
    }
  }

  // Evaluate RPN
  const evalStack: number[] = [];
  for (const token of outputQueue) {
    if (typeof token === 'number') {
      evalStack.push(token);
    } else if ('+-*/'.includes(token)) {
      if (evalStack.length < 2) return NaN;
      const b = evalStack.pop()!;
      const a = evalStack.pop()!;
      let res = 0;
      switch (token) {
        case '+': res = a + b; break;
        case '-': res = a - b; break;
        case '*': res = a * b; break;
        case '/':
          if (b === 0) return NaN;
          res = a / b;
          break;
      }
      evalStack.push(res);
    }
  }

  if (evalStack.length === 0) return 0;
  const finalVal = evalStack[0];
  // Round to avoid floating point precision artifacts (e.g. 0.1 + 0.2 = 0.30000000000000004)
  return Math.round(finalVal * 1e10) / 1e10;
}

export const VirtualCalculator: React.FC<VirtualCalculatorProps> = ({ isOpen, onClose }) => {
  // expression tracks the complete typed equation (e.g. "25 / 5 + 25 / 5")
  const [expression, setExpression] = useState('');
  // currentDisplay tracks the current active number being typed or current result
  const [currentDisplay, setCurrentDisplay] = useState('0');
  const [memory, setMemory] = useState<number>(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Draggable position state
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ mouseX: number; mouseY: number; startX: number; startY: number }>({
    mouseX: 0,
    mouseY: 0,
    startX: 0,
    startY: 0,
  });

  // Position at default bottom right if unset
  useEffect(() => {
    if (isOpen && position === null) {
      const defaultX = Math.max(16, window.innerWidth - 340);
      const defaultY = Math.max(70, window.innerHeight - 440);
      setPosition({ x: defaultX, y: defaultY });
    }
  }, [isOpen, position]);

  // Keep inside screen viewport on resize
  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => {
        if (!prev) return prev;
        const calcWidth = 320;
        const calcHeight = isMinimized ? 50 : 420;
        return {
          x: Math.max(10, Math.min(window.innerWidth - calcWidth - 10, prev.x)),
          y: Math.max(10, Math.min(window.innerHeight - calcHeight - 10, prev.y)),
        };
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMinimized]);

  // Handle pointer down on title bar for dragging
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;

    const currentX = position ? position.x : Math.max(16, window.innerWidth - 340);
    const currentY = position ? position.y : Math.max(70, window.innerHeight - 440);

    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      startX: currentX,
      startY: currentY,
    };

    setIsDragging(true);

    const onPointerMove = (moveEvent: PointerEvent) => {
      const deltaX = moveEvent.clientX - dragStartRef.current.mouseX;
      const deltaY = moveEvent.clientY - dragStartRef.current.mouseY;

      const calcWidth = 320;
      const calcHeight = isMinimized ? 50 : 420;

      const clampedX = Math.max(10, Math.min(window.innerWidth - calcWidth - 10, dragStartRef.current.startX + deltaX));
      const clampedY = Math.max(10, Math.min(window.innerHeight - calcHeight - 10, dragStartRef.current.startY + deltaY));

      setPosition({ x: clampedX, y: clampedY });
    };

    const onPointerUp = () => {
      setIsDragging(false);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  };

  // Input a numeric digit (0-9)
  const handleDigit = useCallback((digit: string) => {
    if (isCalculated) {
      // Start fresh calculation
      setExpression(digit);
      setCurrentDisplay(digit);
      setIsCalculated(false);
      return;
    }

    if (currentDisplay === '0') {
      setCurrentDisplay(digit);
      // Replace last 0 in expression or append
      if (expression === '' || expression.endsWith(' 0')) {
        setExpression(expression.slice(0, -1) + digit);
      } else {
        setExpression(expression + digit);
      }
    } else {
      setCurrentDisplay(prev => prev + digit);
      setExpression(prev => prev + digit);
    }
  }, [currentDisplay, expression, isCalculated]);

  // Input decimal point
  const handleDecimal = useCallback(() => {
    if (isCalculated) {
      setExpression('0.');
      setCurrentDisplay('0.');
      setIsCalculated(false);
      return;
    }

    if (!currentDisplay.includes('.')) {
      const nextDisplay = currentDisplay === '' ? '0.' : currentDisplay + '.';
      setCurrentDisplay(nextDisplay);
      setExpression(prev => (prev === '' ? '0.' : prev + '.'));
    }
  }, [currentDisplay, isCalculated]);

  // Input binary operator (+, -, *, /)
  const handleOperator = useCallback((op: string) => {
    const symbol = op === '*' ? '*' : op === '/' ? '/' : op;

    if (isCalculated) {
      // Chain from previous result
      setExpression(`${currentDisplay} ${symbol} `);
      setCurrentDisplay('0');
      setIsCalculated(false);
      return;
    }

    // If expression ends with an operator and space, replace it
    if (/\s[+\-*/]\s$/.test(expression)) {
      setExpression(expression.replace(/\s[+\-*/]\s$/, ` ${symbol} `));
      return;
    }

    setExpression(prev => (prev === '' ? `0 ${symbol} ` : `${prev} ${symbol} `));
    setCurrentDisplay('0');
  }, [currentDisplay, expression, isCalculated]);

  // Handle Parentheses
  const handleParen = useCallback((paren: '(' | ')') => {
    if (isCalculated) {
      setExpression(paren);
      setCurrentDisplay('0');
      setIsCalculated(false);
      return;
    }
    setExpression(prev => prev + paren);
  }, [isCalculated]);

  // Calculate final result adhering to BODMAS
  const handleEquals = useCallback(() => {
    if (!expression) return;

    try {
      const res = evaluateMath(expression);
      if (isNaN(res) || !isFinite(res)) {
        setCurrentDisplay('Error');
      } else {
        const resStr = String(res);
        setCurrentDisplay(resStr);
      }
      setIsCalculated(true);
    } catch {
      setCurrentDisplay('Error');
      setIsCalculated(true);
    }
  }, [expression]);

  // Clear All (AC)
  const handleClear = useCallback(() => {
    setExpression('');
    setCurrentDisplay('0');
    setIsCalculated(false);
  }, []);

  // Clear Entry (CE)
  const handleClearEntry = useCallback(() => {
    if (isCalculated) {
      handleClear();
      return;
    }
    // Remove the currentDisplay from expression
    if (currentDisplay !== '0' && expression.endsWith(currentDisplay)) {
      setExpression(prev => prev.slice(0, -currentDisplay.length));
    }
    setCurrentDisplay('0');
  }, [currentDisplay, expression, handleClear, isCalculated]);

  // Backspace
  const handleBackspace = useCallback(() => {
    if (isCalculated) {
      handleClear();
      return;
    }

    if (expression.endsWith(' ')) {
      // Remove trailing " + " or " - " etc
      setExpression(prev => prev.replace(/\s[+\-*/]\s$/, ''));
      return;
    }

    if (currentDisplay.length > 1) {
      setCurrentDisplay(prev => prev.slice(0, -1));
    } else {
      setCurrentDisplay('0');
    }

    setExpression(prev => (prev.length > 1 ? prev.slice(0, -1) : ''));
  }, [currentDisplay, expression, handleClear, isCalculated]);

  // Square Root
  const handleSqrt = useCallback(() => {
    const val = parseFloat(currentDisplay);
    if (val < 0) {
      setCurrentDisplay('Error');
      return;
    }
    const res = Math.round(Math.sqrt(val) * 1e10) / 1e10;
    setCurrentDisplay(String(res));
    // If expression ends with currentDisplay, replace it
    if (expression.endsWith(currentDisplay)) {
      setExpression(expression.slice(0, -currentDisplay.length) + String(res));
    } else {
      setExpression(String(res));
    }
  }, [currentDisplay, expression]);

  // Reciprocal (1/x)
  const handleReciprocal = useCallback(() => {
    const val = parseFloat(currentDisplay);
    if (val === 0) {
      setCurrentDisplay('Error');
      return;
    }
    const res = Math.round((1 / val) * 1e10) / 1e10;
    setCurrentDisplay(String(res));
    if (expression.endsWith(currentDisplay)) {
      setExpression(expression.slice(0, -currentDisplay.length) + String(res));
    } else {
      setExpression(String(res));
    }
  }, [currentDisplay, expression]);

  // Sign toggle (+/-)
  const handleToggleSign = useCallback(() => {
    const val = parseFloat(currentDisplay);
    if (isNaN(val)) return;
    const toggled = -val;
    const toggledStr = String(toggled);
    if (expression.endsWith(currentDisplay)) {
      setExpression(expression.slice(0, -currentDisplay.length) + toggledStr);
    }
    setCurrentDisplay(toggledStr);
  }, [currentDisplay, expression]);

  // Memory functions
  const memoryClear = () => setMemory(0);
  const memoryRecall = () => {
    setCurrentDisplay(String(memory));
    setExpression(prev => prev + String(memory));
  };
  const memoryStore = () => setMemory(parseFloat(currentDisplay) || 0);
  const memoryAdd = () => setMemory(m => m + (parseFloat(currentDisplay) || 0));
  const memorySubtract = () => setMemory(m => m - (parseFloat(currentDisplay) || 0));

  // Physical keyboard support
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid capturing when user is typing in an active input element (e.g. TITA input)
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
        handleDigit(e.key);
      } else if (e.key === '.') {
        e.preventDefault();
        handleDecimal();
      } else if (['+', '-', '*', '/'].includes(e.key)) {
        e.preventDefault();
        handleOperator(e.key);
      } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        handleEquals();
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleClear();
      } else if (e.key === '(' || e.key === ')') {
        e.preventDefault();
        handleParen(e.key as '(' | ')');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleDigit, handleDecimal, handleOperator, handleEquals, handleBackspace, handleClear, handleParen]);

  if (!isOpen) return null;

  return (
    <div
      style={
        position
          ? { left: `${position.x}px`, top: `${position.y}px` }
          : { right: '20px', bottom: '20px' }
      }
      className={`fixed z-50 shadow-2xl rounded-2xl border border-slate-300 overflow-hidden bg-white text-slate-900 w-80 font-mono ${
        isDragging ? 'select-none ring-2 ring-blue-500/50' : 'transition-shadow duration-150'
      }`}
    >
      {/* Title Bar - Draggable */}
      <div
        onPointerDown={handlePointerDown}
        className={`bg-slate-900 text-white px-3.5 py-2.5 flex items-center justify-between border-b border-slate-800 select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        title="Drag to reposition calculator"
      >
        <div className="flex items-center gap-2">
          <GripHorizontal className="w-4 h-4 text-slate-400 shrink-0" />
          <CalcIcon className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-xs font-bold tracking-wider uppercase">CAT Calculator</span>
          {memory !== 0 && (
            <span className="text-[10px] bg-amber-400 text-slate-950 px-1.5 py-0.2 rounded font-black">
              M
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(!isMinimized);
            }}
            aria-label={isMinimized ? 'Expand Virtual Calculator' : 'Minimize Virtual Calculator'}
            className="p-1 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition"
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close Virtual Calculator"
            className="p-1 text-slate-300 hover:text-rose-400 hover:bg-slate-800 rounded transition"
            title="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="p-3 bg-slate-50">
          {/* LCD Display */}
          <div className="bg-white border-2 border-slate-300 rounded-xl p-3 mb-3 text-right shadow-inner">
            {/* Expression History Line */}
            <div className="text-[11px] font-mono text-slate-500 h-4 overflow-x-auto whitespace-nowrap scrollbar-none">
              {expression ? expression.replace(/\*/g, '×').replace(/\//g, '÷') : '\u00A0'}
            </div>
            {/* Active Value / Result Line */}
            <div className="text-2xl font-mono font-black text-slate-900 tracking-tight overflow-x-auto whitespace-nowrap mt-0.5">
              {currentDisplay}
            </div>
          </div>

          {/* Memory Row */}
          <div className="grid grid-cols-5 gap-1.5 mb-2">
            {[
              { label: 'MC', fn: memoryClear },
              { label: 'MR', fn: memoryRecall },
              { label: 'MS', fn: memoryStore },
              { label: 'M+', fn: memoryAdd },
              { label: 'M-', fn: memorySubtract },
            ].map((btn) => (
              <button
                key={btn.label}
                onClick={btn.fn}
                className="py-1.5 bg-slate-200 hover:bg-slate-300 active:bg-slate-400 text-slate-700 text-xs font-bold rounded-lg transition"
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Keypad Grid */}
          <div className="grid grid-cols-4 gap-1.5">
            {/* Row 1 */}
            <button
              onClick={handleClear}
              className="py-2.5 bg-rose-100 hover:bg-rose-200 active:bg-rose-300 text-rose-800 font-bold rounded-lg text-xs transition"
            >
              C
            </button>
            <button
              onClick={handleClearEntry}
              className="py-2.5 bg-slate-200 hover:bg-slate-300 active:bg-slate-400 text-slate-800 font-bold rounded-lg text-xs transition"
            >
              CE
            </button>
            <button
              onClick={handleBackspace}
              className="py-2.5 bg-slate-200 hover:bg-slate-300 active:bg-slate-400 text-slate-800 font-bold rounded-lg text-xs transition flex items-center justify-center"
              title="Backspace"
            >
              <Delete className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleOperator('/')}
              className="py-2.5 bg-blue-100 hover:bg-blue-200 active:bg-blue-300 text-blue-900 font-bold rounded-lg text-sm transition"
            >
              ÷
            </button>

            {/* Row 2 */}
            <button
              onClick={handleSqrt}
              className="py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-lg text-xs transition"
            >
              √
            </button>
            <button
              onClick={() => handleParen('(')}
              className="py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-lg text-xs transition"
            >
              (
            </button>
            <button
              onClick={() => handleParen(')')}
              className="py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-lg text-xs transition"
            >
              )
            </button>
            <button
              onClick={() => handleOperator('*')}
              className="py-2.5 bg-blue-100 hover:bg-blue-200 active:bg-blue-300 text-blue-900 font-bold rounded-lg text-sm transition"
            >
              ×
            </button>

            {/* Row 3 */}
            <button
              onClick={() => handleDigit('7')}
              className="py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-lg text-sm transition shadow-2xs"
            >
              7
            </button>
            <button
              onClick={() => handleDigit('8')}
              className="py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-lg text-sm transition shadow-2xs"
            >
              8
            </button>
            <button
              onClick={() => handleDigit('9')}
              className="py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-lg text-sm transition shadow-2xs"
            >
              9
            </button>
            <button
              onClick={() => handleOperator('-')}
              className="py-2.5 bg-blue-100 hover:bg-blue-200 active:bg-blue-300 text-blue-900 font-bold rounded-lg text-sm transition"
            >
              −
            </button>

            {/* Row 4 */}
            <button
              onClick={() => handleDigit('4')}
              className="py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-lg text-sm transition shadow-2xs"
            >
              4
            </button>
            <button
              onClick={() => handleDigit('5')}
              className="py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-lg text-sm transition shadow-2xs"
            >
              5
            </button>
            <button
              onClick={() => handleDigit('6')}
              className="py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-lg text-sm transition shadow-2xs"
            >
              6
            </button>
            <button
              onClick={() => handleOperator('+')}
              className="py-2.5 bg-blue-100 hover:bg-blue-200 active:bg-blue-300 text-blue-900 font-bold rounded-lg text-sm transition"
            >
              +
            </button>

            {/* Row 5 */}
            <button
              onClick={() => handleDigit('1')}
              className="py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-lg text-sm transition shadow-2xs"
            >
              1
            </button>
            <button
              onClick={() => handleDigit('2')}
              className="py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-lg text-sm transition shadow-2xs"
            >
              2
            </button>
            <button
              onClick={() => handleDigit('3')}
              className="py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-lg text-sm transition shadow-2xs"
            >
              3
            </button>
            <button
              onClick={handleReciprocal}
              className="py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-lg text-xs transition"
              title="1/x"
            >
              1/x
            </button>

            {/* Row 6 */}
            <button
              onClick={handleToggleSign}
              className="py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-lg text-xs transition"
            >
              ±
            </button>
            <button
              onClick={() => handleDigit('0')}
              className="py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-lg text-sm transition shadow-2xs"
            >
              0
            </button>
            <button
              onClick={handleDecimal}
              className="py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-lg text-sm transition shadow-2xs"
            >
              .
            </button>
            <button
              onClick={handleEquals}
              className="py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-extrabold rounded-lg text-base transition shadow-sm"
            >
              =
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
