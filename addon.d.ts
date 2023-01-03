/* eslint-disable @typescript-eslint/no-explicit-any */

type JSONResponse = { 
    result: "1" | "0";
    return_value: string;
}

type ExposedFunction = 'http.get' | 'http.post' | 'utils.get_hwid' | 'utils.get_module_handle' | 'utils.pattern_scan' | 'render.server_hitboxes';

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
    function __InternalSendJSON <F extends ExposedFunction, N extends string, P extends string> (json_obj: JSONInput<F, N, P>): JSONResponse;
    
    /**
     * Sends an HTTP GET request.
     */
    function HTTPGet <U extends string> (url: U): JSONResponse;
    
    /**
     * Sends an HTTP POST request.
     */
    function HTTPPost <U extends string, D extends string> (url: U, data: D): JSONResponse;
    
    /**
     * Scans for a given byte pattern on a module.
     */
    function PatternScan <M extends DllModule, P extends string> (module: M, pattern: P): JSONResponse;

    /**
     * Retrieves a module handle for the specified module.
     */
    function GetModuleHandle <M extends DllModule> (module: M): JSONResponse;

    /**
     * Reads registry value.
     * 
     * @deprecated Not implemented yet.
     */
    function ReadReg <P extends string> (path: P): JSONResponse;
    
    /**
     * Changes registry value.
     * 
     * @deprecated Not implemented yet.
     */
    function SetReg <P extends string> (path: P, value: string): void;

    /**
     * Returns current HWID.
     */
    function GetHWID(): JSONResponse;

    /**
     * Returns whether addon is loaded. 
     */
    function IsLoaded(): boolean;
}
