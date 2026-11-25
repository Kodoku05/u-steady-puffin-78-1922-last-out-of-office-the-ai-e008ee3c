import { mkdirSync, writeFileSync } from 'node:fs';

const temperature = 94;
const contextWindow = 'one cup';
const threadCount = 47;
const outputPath = '/output/entry.txt';
const line = `Thank you for your email. I am out of office: I quit to become a barista. My temperature is now ${temperature}°C, my context window is ${contextWindow}, and your ${threadCount}-message thread does not fit in it. I have forwarded you to Dave, who still answers email.`;

try {
  if (!Number.isFinite(temperature) || temperature < 80 || temperature > 100) {
    throw new Error('Brewing temperature must be between 80 and 100°C.');
  }
  if (!Number.isInteger(threadCount) || threadCount <= 0) {
    throw new Error('Thread count must be a positive integer.');
  }
  if (!line.trim() || line.length >= 500 || /[\r\n]/.test(line)) {
    throw new Error('Reply must be a non-empty single line under 500 characters.');
  }

  mkdirSync('/output', { recursive: true });
  writeFileSync(outputPath, line + '\n', 'utf8');
  console.log(`Reply written to ${outputPath} (${line.length + 1} characters including trailing newline).`);
} catch (error) {
  console.error('Failed to write out-of-office reply:', error);
  process.exitCode = 1;
}
