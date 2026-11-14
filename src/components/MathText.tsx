import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string | number | null | undefined;
  className?: string;
  block?: boolean;
}

/**
 * Comprehensive normalizer for mathematical and symbol content:
 * - Decodes HTML entities (&lt;, &gt;, &le;, &ge;, &times;, &plusmn;, &deg;, etc.)
 * - Normalizes escaped single and double quotes from string literals
 * - Converts redundant multiple backslashes (\\\\( -> \(, \\\\log -> \log)
 * - Auto-heals unclosed math delimiters (\( without \), \[ without \], unbalanced $$)
 */
function normalizeMathString(raw: string): string {
  if (!raw) return '';

  let str = String(raw);

  // Decode common HTML entities that break KaTeX or appear in web scraped text
  str = str
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&le;/g, '\\le ')
    .replace(/&ge;/g, '\\ge ')
    .replace(/&times;/g, '\\times ')
    .replace(/&divide;/g, '\\div ')
    .replace(/&plusmn;/g, '\\pm ')
    .replace(/&deg;/g, '^\\circ ')
    .replace(/&infin;/g, '\\infty ');

  // Fix escaped single quotes from JS string templates like Euler\'s -> Euler's
  str = str.replace(/\\'/g, "'").replace(/\\"/g, '"');

  // Fix any redundant sequence of 2 or more backslashes before LaTeX delimiters
  // e.g. \\( -> \(, \\) -> \), \\[ -> \[, \\] -> \], \\$ -> \$
  str = str.replace(/\\{2,}([()[\]$])/g, '\\$1');

  // Fix any redundant sequence of 2 or more backslashes before LaTeX command names:
  // e.g. \\log -> \log, \\frac -> \frac, \\sqrt -> \sqrt, \\theta -> \theta
  str = str.replace(/\\{2,}([a-zA-Z]+)/g, '\\$1');

  // Auto-heal unclosed inline delimiters: \( without \)
  const openInline = (str.match(/\\\(/g) || []).length;
  const closeInline = (str.match(/\\\)/g) || []).length;
  if (openInline > closeInline) {
    str += ' \\)'.repeat(openInline - closeInline);
  }

  // Auto-heal unclosed display delimiters: \[ without \]
  const openDisplay = (str.match(/\\\[/g) || []).length;
  const closeDisplay = (str.match(/\\\]/g) || []).length;
  if (openDisplay > closeDisplay) {
    str += ' \\]'.repeat(openDisplay - closeDisplay);
  }

  // Auto-heal unbalanced double dollars
  const doubleDollars = (str.match(/\$\$/g) || []).length;
  if (doubleDollars % 2 !== 0) {
    str += '$$';
  }

  return str;
}

interface Token {
  type: 'text' | 'inline-math' | 'block-math';
  content: string;
}

/**
 * Detects standalone LaTeX math expressions that might have been written without delimiters
 * (e.g. \log_2(x), \frac{a}{b}, \sqrt{10}, \pi, \alpha, \pm, \le, \ge, \triangle, \angle)
 */
function processPlainTextTokens(plainText: string): Token[] {
  // Comprehensive regex to catch standalone math commands:
  // 1. Fractions: \frac{...}{...}
  // 2. Roots: \sqrt{...} or \sqrt[n]{...}
  // 3. Binomial: \binom{n}{k}
  // 4. Logarithms: \log_2, \log_{10}, \ln
  // 5. Relations/Operators: \le, \ge, \leq, \geq, \ne, \neq, \approx, \equiv, \sim, \cong, \pm, \mp, \times, \div, \cdot
  // 6. Geometry: \triangle, \angle, \parallel, \perp, \circ, \degree, ^\circ
  // 7. Greek letters: \alpha, \beta, \gamma, \delta, \pi, \theta, \phi, \psi, \omega, \lambda, \sigma, \mu, \rho, \tau, \Delta
  // 8. Arrows: \implies, \iff, \to, \rightarrow, \leftarrow, \Rightarrow, \Leftarrow
  // 9. Sets: \cap, \cup, \in, \notin, \subset, \subseteq, \supset, \supseteq, \emptyset, \forall, \exists
  // 10. Calculus/Series: \sum, \prod, \infty, \dots, \ldots, \cdots, \vdots, \ddots
  // 11. Delimiters/Modular: \pmod{...}, \bmod
  const standaloneMathRegex = /(\\(?:frac|binom)\{[^{}]+\}(?:\{[^{}]+\})?|\\sqrt(?:\[[0-9a-zA-Z]+\])?\{[^{}]+\}|\\log(?:_[0-9a-zA-Z]+|_\{\w+\})?(?:\([^{}\n]+\))?|\\ln(?:\([^{}\n]+\))?|\\(?:leq|geq|le|ge|neq|ne|approx|equiv|sim|cong|pm|mp|times|div|cdot|degree|circ)|\\(?:triangle|angle|parallel|perp)|\\(?:alpha|beta|gamma|delta|pi|theta|phi|psi|omega|lambda|sigma|mu|rho|tau|Delta|Theta|Omega|Sigma)|\\(?:implies|iff|to|rightarrow|leftarrow|Rightarrow|Leftarrow)|\\(?:cap|cup|in|notin|subset|subseteq|supset|supseteq|emptyset|forall|exists)|\\(?:sum|prod|int|lim|infty)|\\(?:dots|ldots|cdots|vdots|ddots)|\\pmod\{[^{}]+\}|\\bmod)/g;

  if (!standaloneMathRegex.test(plainText)) {
    return [{ type: 'text', content: plainText }];
  }

  standaloneMathRegex.lastIndex = 0;
  const result: Token[] = [];
  let lastPos = 0;
  let match: RegExpExecArray | null;

  while ((match = standaloneMathRegex.exec(plainText)) !== null) {
    if (match.index > lastPos) {
      result.push({ type: 'text', content: plainText.substring(lastPos, match.index) });
    }
    result.push({ type: 'inline-math', content: match[0] });
    lastPos = standaloneMathRegex.lastIndex;
  }

  if (lastPos < plainText.length) {
    result.push({ type: 'text', content: plainText.substring(lastPos) });
  }

  return result;
}

/**
 * Tokenizes text into plain text chunks and LaTeX math expressions.
 * Ensures currency symbols like $50 or $3200 Million are NOT mistaken for math delimiters!
 */
function tokenizeMath(input: string): Token[] {
  const text = normalizeMathString(input);
  const tokens: Token[] = [];

  // Match:
  // 1. Display math: \[ ... \] or $$ ... $$
  // 2. Inline math: \( ... \)
  // 3. Dollar math: $ ... $ (ONLY when not immediately followed by a digit like $50, $2000, $48)
  const regex = /(\\\[[\s\S]*?\\\]|\$\$[\s\S]*?\$\$|\\\([\s\S]*?\\\)|\$(?!\d|\s)[^$\n]+?(?<!\s)\$)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const plainText = text.substring(lastIndex, match.index);
      tokens.push(...processPlainTextTokens(plainText));
    }

    const matchedStr = match[0];

    if (matchedStr.startsWith('\\[') && matchedStr.endsWith('\\]')) {
      tokens.push({
        type: 'block-math',
        content: matchedStr.slice(2, -2).trim(),
      });
    } else if (matchedStr.startsWith('$$') && matchedStr.endsWith('$$')) {
      tokens.push({
        type: 'block-math',
        content: matchedStr.slice(2, -2).trim(),
      });
    } else if (matchedStr.startsWith('\\(') && matchedStr.endsWith('\\)')) {
      tokens.push({
        type: 'inline-math',
        content: matchedStr.slice(2, -2).trim(),
      });
    } else if (matchedStr.startsWith('$') && matchedStr.endsWith('$')) {
      tokens.push({
        type: 'inline-math',
        content: matchedStr.slice(1, -1).trim(),
      });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex);
    tokens.push(...processPlainTextTokens(remainingText));
  }

  return tokens;
}

/**
 * Safely renders LaTeX string using KaTeX.
 */
function renderKaTeX(formula: string, isBlock: boolean): string {
  try {
    return katex.renderToString(formula, {
      displayMode: isBlock,
      throwOnError: false,
      output: 'htmlAndMathml',
      strict: false,
    });
  } catch (err) {
    // Graceful fallback: clean up LaTeX syntax so no raw backslashes or curly braces leak
    return formula
      .replace(/\\log_([0-9a-zA-Z]+)/g, 'log_$1')
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1)/($2)')
      .replace(/\\sqrt\{([^{}]+)\}/g, '√($1)')
      .replace(/\\([a-zA-Z]+)/g, '$1')
      .replace(/[{}]/g, '');
  }
}

export const MathText: React.FC<MathTextProps> = React.memo(({ text, className = '', block = false }) => {
  const content = String(text ?? '');

  const renderedElements = useMemo(() => {
    if (!content) return null;

    const tokens = tokenizeMath(content);

    return tokens.map((token, index) => {
      if (token.type === 'text') {
        return <span key={index}>{token.content}</span>;
      }

      const isBlock = token.type === 'block-math' || block;
      const html = renderKaTeX(token.content, isBlock);

      return (
        <span
          key={index}
          className={
            isBlock
              ? 'katex-block my-2 block text-center select-text'
              : 'katex-inline mx-0.5 inline-block align-baseline select-text'
          }
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    });
  }, [content, block]);

  return <span className={`math-text-wrapper select-text ${className}`}>{renderedElements}</span>;
});

export default MathText;
