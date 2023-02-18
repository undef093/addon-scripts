/* eslint-disable @typescript-eslint/no-explicit-any */

type ValueOrNull = any;

type ExposedFunction = 'http.get' | 'http.post' | 'clipboard.get' | 'clipboard.set' | 'filesystem.write' | 'filesystem.append' | 'filesystem.read' | 'utils.get_hwid' | 'utils.get_module_handle' | 'utils.pattern_scan' | 'render.server_hitboxes';

type JSONInput<F extends ExposedFunctions, N extends string, P extends string, D extends string> = { 
    func: F;
    data?: D;
    path?: P;
    domain?: N;
    module?: N;
    pattern?: P;
};

type DllModule = 'engine.dll' | 'client.dll' | 'vstdlib.dll' | 'vguimatsurface.dll' | 'vgui2.dll' | 'materialsystem.dll' | 'datacache.dll' | 'vphysics.dll' | 'inputsystem.dll' | 'shaderapidx9.dll';

declare namespace Addon {    
    function HTTPGet <U extends string> (url: U): ValueOrNull;
    function HTTPPost <U extends string, D extends string> (url: U, data: D): ValueOrNull;
    
    function GetClipboard(): ValueOrNull;
    function SetClipboard <D extends string> (data: D): ValueOrNull;

    function WriteFile <P extends string, D extends string> (path: P, data: D): ValueOrNull;
    function AppendFile <P extends string, D extends string> (path: P, data: D): ValueOrNull;
    function ReadFile <P extends string> (path: P): ValueOrNull;

    /**
     * @deprecated Not implemented yet.
     */
    function ReadReg <P extends string> (path: P): ValueOrNull;
    
    /**
     * @deprecated Not implemented yet.
     */
    function SetReg <P extends string> (path: P, value: string): void;

    function GetHWID(): ValueOrNull;

    function IsLoaded(): boolean;
}
