"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AkariStateProvider = void 0;
const rxjs_1 = require("rxjs");
const util_1 = require("../util");
class AkariStateProvider {
    constructor(initialState) {
        if (!initialState) {
            this._state = new Map();
        }
        this._state = util_1.AkariUtility.convertToObservable(initialState);
    }
    /**
     *
     * @desc Allows to get all state or by a specific name
     * @param property - Key name to search in state
     * @returns any
     */
    getState(property) {
        const obj = {};
        this._state.forEach((observable, key) => {
            obj[key] = observable.getValue();
        });
        if (!property) {
            return obj;
        }
        return obj.hasOwnProperty(property) ? obj[property] : undefined;
    }
    /**
     *
     * @desc Allows to add a value to the state
     * @param key - Key name of state
     * @param value - Value of state
     * @param emitValue - Emit value of state
     * @returns void
     */
    setState(key, value, emitValue = true) {
        var _a;
        const stateFound = util_1.AkariUtility.findProperty(this.getState(), key);
        stateFound && emitValue
            ? (_a = this._state.get(key)) === null || _a === void 0 ? void 0 : _a.next(value)
            : this._state.set(key, new rxjs_1.BehaviorSubject(value));
    }
    /**
     *
     * @desc Listen when the state changes
     * @param key - Key name of state
     * @returns Observable
     */
    listenState(key) {
        var _a;
        const stateFound = util_1.AkariUtility.findProperty(this.getState(), key);
        return stateFound
            ? (_a = this._state.get(key)) === null || _a === void 0 ? void 0 : _a.asObservable()
            : new rxjs_1.Observable();
    }
}
exports.AkariStateProvider = AkariStateProvider;
