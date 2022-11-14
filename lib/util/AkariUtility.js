import { BehaviorSubject } from "rxjs";
export class AkariUtility {
    /**
     *
     * @desc Allows to set initial state to provider
     * @param initialState - Initial state
     * @returns Map<string, BehaviorSubject<any>>
     */
    static convertToObservable(initialState) {
        const state = new Map();
        Object.keys(initialState).forEach((x) => {
            state.set(x, new BehaviorSubject(initialState[x]));
        });
        return state;
    }
    /**
     *
     * @desc Allows to find if the object has the field param
     * @param data - A simple object
     * @param field - Object field name
     * @returns boolean
     */
    static findProperty(data, field) {
        if (!data.hasOwnProperty(field)) {
            const errorMessage = `State ${field} was not created.`;
            console.warn(errorMessage);
            return false;
        }
        return true;
    }
}
