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
  type: 'text' | 'inline-math' | 'block-math' | 'image' | 'table';
  content: string;
  alt?: string;
  tableData?: string[][];
}

/**
 * Checks for markdown tables (| h1 | h2 |\n|---|---|\n| r1 | r2 |)
 */
function extractTables(text: string): Token[] {
  const tableRegex = /(?:^|\n)((?:\|[^\n]+\|\r?\n)+)/g;
  const tokens: Token[] = [];
  let lastPos = 0;
  let match: RegExpExecArray | null;

  while ((match = tableRegex.exec(text)) !== null) {
    const rawTable = match[1].trim();
    const lines = rawTable.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    // Needs at least header and separator or 2 rows
    if (lines.length >= 2 && lines.some(l => l.includes('---') || l.includes(':-'))) {
      const start = match.index + (match[0].startsWith('\n') ? 1 : 0);
      if (start > lastPos) {
        tokens.push({ type: 'text', content: text.substring(lastPos, start) });
      }

      const parsedRows = lines
        .filter(l => !l.replace(/[\s|:-]/g, '').length ? false : true) // skip separator
        .map(l => {
          const cells = l.split('|').map(c => c.trim());
          if (cells.length > 0 && cells[0] === '') cells.shift();
          if (cells.length > 0 && cells[cells.length - 1] === '') cells.pop();
          return cells;
        });

      if (parsedRows.length > 0) {
        tokens.push({
          type: 'table',
          content: rawTable,
          tableData: parsedRows,
        });
      } else {
        tokens.push({ type: 'text', content: rawTable });
      }

      lastPos = match.index + match[0].length;
    }
  }

  if (lastPos < text.length) {
    tokens.push({ type: 'text', content: text.substring(lastPos) });
  }

  return tokens.length > 0 ? tokens : [{ type: 'text', content: text }];
}

/**
 * Extracts markdown images (![alt](url)) or HTML <img> tags from text
 */
function extractImages(text: string): Token[] {
  const imgRegex = /!\[([^\]]*)\]\(([^)]+)\)|<img[^>]+src=["']([^"']+)["'][^>]*alt=["']?([^"'>]*)["']?[^>]*>|<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const tokens: Token[] = [];
  let lastPos = 0;
  let match: RegExpExecArray | null;

  while ((match = imgRegex.exec(text)) !== null) {
    if (match.index > lastPos) {
      tokens.push({ type: 'text', content: text.substring(lastPos, match.index) });
    }

    const alt = match[1] || match[4] || 'Diagram';
    const src = match[2] || match[3] || match[5] || '';

    tokens.push({
      type: 'image',
      content: src,
      alt,
    });

    lastPos = imgRegex.lastIndex;
  }

  if (lastPos < text.length) {
    tokens.push({ type: 'text', content: text.substring(lastPos) });
  }

  return tokens.length > 0 ? tokens : [{ type: 'text', content: text }];
}

/**
 * Detects standalone LaTeX math expressions that might have been written without delimiters
 * (e.g. \log_2(x), \frac{a}{b}, \sqrt{10}, \pi, \alpha, \pm, \le, \ge, \triangle, \angle)
 */
function processPlainTextTokens(plainText: string): Token[] {
  // First, extract any embedded images
  const imageTokens = extractImages(plainText);
  const afterImages: Token[] = [];

  for (const t of imageTokens) {
    if (t.type === 'image') {
      afterImages.push(t);
    } else {
      // Check for tables
      const tableTokens = extractTables(t.content);
      afterImages.push(...tableTokens);
    }
  }

  const finalTokens: Token[] = [];

  for (const t of afterImages) {
    if (t.type !== 'text') {
      finalTokens.push(t);
      continue;
    }

    const subText = t.content;

    // Comprehensive regex to catch standalone math commands:
    const standaloneMathRegex = /(\\(?:frac|binom)\{[^{}]+\}(?:\{[^{}]+\})?|\\sqrt(?:\[[0-9a-zA-Z]+\])?\{[^{}]+\}|\\log(?:_[0-9a-zA-Z]+|_\{\w+\})?(?:\([^{}\n]+\))?|\\ln(?:\([^{}\n]+\))?|\\(?:leq|geq|le|ge|neq|ne|approx|equiv|sim|cong|pm|mp|times|div|cdot|degree|circ)|\\(?:triangle|angle|parallel|perp)|\\(?:alpha|beta|gamma|delta|pi|theta|phi|psi|omega|lambda|sigma|mu|rho|tau|Delta|Theta|Omega|Sigma)|\\(?:implies|iff|to|rightarrow|leftarrow|Rightarrow|Leftarrow)|\\(?:cap|cup|in|notin|subset|subseteq|supset|supseteq|emptyset|forall|exists)|\\(?:sum|prod|int|lim|infty)|\\(?:dots|ldots|cdots|vdots|ddots)|\\pmod\{[^{}]+\}|\\bmod)/g;

    if (!standaloneMathRegex.test(subText)) {
      finalTokens.push({ type: 'text', content: subText });
      continue;
    }

    standaloneMathRegex.lastIndex = 0;
    let lastPos = 0;
    let match: RegExpExecArray | null;

    while ((match = standaloneMathRegex.exec(subText)) !== null) {
      if (match.index > lastPos) {
        finalTokens.push({ type: 'text', content: subText.substring(lastPos, match.index) });
      }
      finalTokens.push({ type: 'inline-math', content: match[0] });
      lastPos = standaloneMathRegex.lastIndex;
    }

    if (lastPos < subText.length) {
      finalTokens.push({ type: 'text', content: subText.substring(lastPos) });
    }
  }

  return finalTokens;
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

      if (token.type === 'image') {
        return (
          <span key={index} className="my-3 block text-center">
            <img
              src={token.content}
              alt={token.alt || 'Question diagram'}
              className="max-w-full h-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs mx-auto block bg-white p-1"
              loading="lazy"
            />
          </span>
        );
      }

      if (token.type === 'table' && token.tableData) {
        const [headers, ...rows] = token.tableData;
        return (
          <span key={index} className="overflow-x-auto my-3 block rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm text-left">
              {headers && (
                <thead className="bg-slate-100 dark:bg-slate-900 font-bold text-slate-800 dark:text-slate-200">
                  <tr>
                    {headers.map((h, i) => (
                      <th key={i} className="px-3 py-2 border-r last:border-r-0 border-slate-200 dark:border-slate-800">
                        <MathText text={h} />
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-950 font-medium">
                {rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-3 py-2 border-r last:border-r-0 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                        <MathText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </span>
        );
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
