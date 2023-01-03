/* eslint-disable @typescript-eslint/no-explicit-any */

type JSONResponse = { 
    result: "1" | "0";
    return_value: string;
}

type ExposedFunctions = 'http.get' | 'utils.get_module_handle' | 'utils.pattern_scan' | 'render.server_hitboxes';

type JSONInput<F extends ExposedFunctions, N extends string, P extends string> = { 
    func: F;
    link?: N;
    path?: P;
    module?: N;
    pattern?: P;
};

type DllModule = 'engine.dll' | 'client.dll' | 'vstdlib.dll' | 'vguimatsurface.dll' | 'vgui2.dll' | 'materialsystem.dll' | 'datacache.dll' | 'vphysics.dll' | 'inputsystem.dll' | 'shaderapidx9.dll';

declare namespace Addon {
    function __InternalSendJSON <F extends ExposedFunctions, N extends string, P extends string> (json_obj: JSONInput<F, N, P>): JSONResponse;
    
    function HTTPGet <L extends string, P extends string> (link: L, path: P): JSONResponse;
    
    function PatternScan <M extends DllModule, P extends string> (module: M, pattern: P): JSONResponse;
    function GetModuleHandle <M extends DllModule> (module: M): JSONResponse;

    function ReadReg <N extends string> (name: N): JSONResponse;
    function SetReg <N extends string> (name: N, value: string): void;

    function GetHWID(): string;

    function IsLoaded(): boolean;
}
