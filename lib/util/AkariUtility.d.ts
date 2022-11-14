import { BehaviorSubject } from "rxjs";
export declare class AkariUtility {
    /**
     *
     * @desc Allows to set initial state to provider
     * @param initialState - Initial state
     * @returns Map<string, BehaviorSubject<any>>
     */
    static convertToObservable(initialState: any): Map<string, BehaviorSubject<any>>;
    /**
     *
     * @desc Allows to find if the object has the field param
     * @param data - A simple object
     * @param field - Object field name
     * @returns boolean
     */
    static findProperty(data: any, field: string): boolean;
}
