/* eslint-disable @typescript-eslint/no-unused-vars */

import { addon as Addon } from '../lib/lib.js';

const clipboard_content = Addon.SetClipboard(' 11 ');

Cheat.Print(`result: ${clipboard_content.result}\nvalue: ${clipboard_content.return_value}\n`);
