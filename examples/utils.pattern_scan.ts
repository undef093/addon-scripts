import { addon as Addon } from "../lib/lib";

const global_vars = Addon.PatternScan('client.dll', 'A1 ? ? ? 5E 8B 40 10');

Cheat.Print(`result: ${global_vars.result}\naddress: 0x${(parseInt(global_vars.return_value, 16) + 1).toString(16)}\n`);