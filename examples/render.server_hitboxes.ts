/* eslint-disable @typescript-eslint/no-unused-vars */

import { addon as Addon } from '../lib/lib.js';

function Draw() {
    Addon.__InternalSendJSON({ func: 'render.server_hitboxes' });
}

Cheat.RegisterCallback('Draw', 'Draw');