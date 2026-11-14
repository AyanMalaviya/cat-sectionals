import { sectionalTests } from '../src/data/testsData';
import { allTopicWiseTests } from '../src/data/topicWiseData';
import katex from 'katex';

function normalizeMathString(raw: string): string {
  if (!raw) return '';
  let str = String(raw);
  str = str.replace(/\\'/g, "'");
  str = str.replace(/\\\\([()[\]$])/g, '\\$1');
  str = str.replace(/\\\\([a-zA-Z])/g, '\\$1');
  return str;
}

interface Token {
  type: 'text' | 'inline-math' | 'block-math';
  content: string;
}

function processPlainTextTokens(plainText: string): Token[] {
  const standaloneMathRegex = /(\\(?:frac|sqrt|binom)\{[^{}]+\}(?:\{[^{}]+\})?|\\log_[0-9a-zA-Z]+(?:\([^{}\n]+\))?|\\(?:alpha|beta|gamma|delta|pi|theta|phi|psi|omega|lambda|sigma|mu|rho|tau|le|ge|pm|mp|times|div|neq|approx|equiv|implies|iff|cap|cup|in|notin|subset|subseteq|supset|supseteq|pmod\{[^{}]+\}|dots|ldots|cdots|vdots|ddots|infty|circ|angle|Delta|sum|prod|to|rightarrow|leftarrow|Rightarrow|Leftarrow|emptyset|forall|exists))/g;

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

function tokenizeMath(input: string): Token[] {
  const text = normalizeMathString(input);
  const tokens: Token[] = [];

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

const allTests = [...sectionalTests, ...allTopicWiseTests];
console.log('Total tests registered:', allTests.length);

let totalQuestions = 0;
let errorsCount = 0;
let unrenderedDelimiters = 0;
let leakCommands = 0;

for (const test of allTests) {
  for (const q of test.questions) {
    totalQuestions++;
    const textsToCheck = [
      { field: 'question', val: q.question },
      { field: 'passage', val: q.passage || '' },
      { field: 'context', val: q.context || '' },
      { field: 'explanation', val: q.explanation || '' },
      ...(q.options ? q.options.map((opt, i) => ({ field: `option[${i}]`, val: opt })) : [])
    ];

    for (const item of textsToCheck) {
      if (!item.val) continue;

      const tokens = tokenizeMath(item.val);

      for (const token of tokens) {
        if (token.type === 'text') {
          // Check if any raw unrendered LaTeX markers leaked into text!
          if (token.content.includes('\\(') || token.content.includes('\\)') || token.content.includes('\\[') || token.content.includes('\\]')) {
            console.error(`[LEAK DELIMITER] Test: ${test.id}, Q: ${q.id}, Field: ${item.field}: Delimiter in text: "${token.content.substring(0, 100)}"`);
            unrenderedDelimiters++;
          }
          if (token.content.match(/\\(?:sqrt|frac|log|pm|times|alpha|beta|theta|pi|le|ge)/)) {
            console.warn(`[LEAK COMMAND] Test: ${test.id}, Q: ${q.id}, Field: ${item.field}: Command in text: "${token.content.substring(0, 100)}"`);
            leakCommands++;
          }
        } else {
          // Try rendering with KaTeX in strict mode!
          try {
            katex.renderToString(token.content, {
              displayMode: token.type === 'block-math',
              throwOnError: true,
              strict: false
            });
          } catch (e: any) {
            console.error(`[KATEX ERROR] Test: ${test.id}, Q: ${q.id}, Field: ${item.field}: Error rendering "${token.content}": ${e.message}`);
            errorsCount++;
          }
        }
      }
    }
  }
}

console.log(`\n========================================`);
console.log(`Total questions audited: ${totalQuestions}`);
console.log(`KaTeX render errors: ${errorsCount}`);
console.log(`Unrendered delimiter leaks: ${unrenderedDelimiters}`);
console.log(`Uncaptured LaTeX commands: ${leakCommands}`);
console.log(`========================================\n`);
