import { addon as Addon } from "../lib/lib";

const hwid = Addon.GetHWID();

Cheat.Print(`result: ${hwid.result}\nvalue: ${hwid.return_value}\n`);
