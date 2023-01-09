/* eslint-disable @typescript-eslint/no-unused-vars */

import { addon as Addon } from '../lib/lib.js';

const clipboard_content = Addon.GetClipboard();

Cheat.Print(`result: ${clipboard_content.result}\nvalue: ${clipboard_content.return_value}\n`);