import { Question } from '../types';

/**
 * Formats a question with clean math notation for easy clipboard copying.
 */
export function formatQuestionForClipboard(q: Question): string {
  const clean = (str: string) =>
    str
      .replace(/\\\(/g, '')
      .replace(/\\\)/g, '')
      .replace(/\\\[/g, '')
      .replace(/\\\]/g, '')
      .replace(/\\times/g, '×')
      .replace(/\\div/g, '÷')
      .replace(/\\pm/g, '±')
      .replace(/\\le/g, '≤')
      .replace(/\\ge/g, '≥')
      .replace(/\\neq/g, '≠')
      .replace(/\\approx/g, '≈')
      .replace(/\\implies/g, '=>')
      .replace(/\\log_([0-9a-zA-Z]+)/g, 'log_$1')
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1 / $2)')
      .replace(/\\sqrt\{([^{}]+)\}/g, '√($1)')
      .replace(/\\binom\{([^{}]+)\}\{([^{}]+)\}/g, 'C($1, $2)')
      .replace(/\\alpha/g, 'α')
      .replace(/\\beta/g, 'β')
      .replace(/\\theta/g, 'θ')
      .replace(/\\pi/g, 'π')
      .trim();

  let text = '';
  if (q.passage) {
    if (q.passageTitle) text += `${q.passageTitle}\n\n`;
    text += `${clean(q.passage)}\n\n--------------------\n\n`;
  }

  text += `Q${q.questionNumber} [${q.section} - ${q.topic}]:\n${clean(q.question)}`;

  if (q.type === 'MCQ' && q.options && q.options.length > 0) {
    text += '\n\nOptions:\n' + q.options.map((opt, i) => `${String.fromCharCode(65 + i)}. ${clean(opt)}`).join('\n');
  }

  return text;
}

/**
 * Copies plain text to clipboard with fallback.
 */
export async function copyTextToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback below
    }
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}
