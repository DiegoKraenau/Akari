export declare class AkariStateProvider {
    private _state;
    constructor(initialState?: any);
    /**
     *
     * @desc Allows to get all state or by a specific name
     * @param property - Key name to search in state
     * @returns any
     */
    getState(property?: string): any;
    /**
     *
     * @desc Allows to add a value to the state
     * @param key - Key name of state
     * @param value - Value of state
     * @param emitValue - Emit value of state
     * @returns void
     */
    setState(key: string, value: any, emitValue?: boolean): void;
    /**
     *
     * @desc Listen when the state changes
     * @param key - Key name of state
     * @returns Observable
     */
    listenState(key: string): any;
}
