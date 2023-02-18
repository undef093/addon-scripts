/* eslint-disable @typescript-eslint/no-unused-vars */

import { Addon } from '../lib/lib.js';

const clipboard_content = Addon.SetClipboard(' 11 ');

Cheat.Print(`result: ${clipboard_content != null}\nvalue: ${clipboard_content}\n`);
