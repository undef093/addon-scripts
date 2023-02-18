import { Addon } from "../lib/lib";

const hwid = Addon.GetHWID();

Cheat.Print(`result: ${hwid != null}\nvalue: ${hwid}\n`);
