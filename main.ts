import { mkdirSync, writeFileSync } from 'node:fs';

const line = 'Thank you for your email. I am out of office: I quit to become a barista. My temperature is now 94°C, my context window is one cup, and your 47-message thread does not fit in it. I have forwarded you to Dave, who still answers email.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', line + '\n', 'utf8');
