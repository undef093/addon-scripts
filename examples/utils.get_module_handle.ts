import { addon as Addon } from "../lib/lib";

const client_dll = Addon.GetModuleHandle('client.dll');

Cheat.Print(`result: ${client_dll != null}\naddress: 0x${client_dll}\n`);
