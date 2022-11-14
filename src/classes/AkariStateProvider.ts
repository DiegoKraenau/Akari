import { BehaviorSubject, Observable } from "rxjs";
import { AkariUtility } from "../util";

export class AkariStateProvider {
  private _state: Map<string, BehaviorSubject<any>>;

  constructor(initialState?: any) {
    if (!initialState) {
      this._state = new Map();
    }
    this._state = AkariUtility.convertToObservable(initialState);
  }

  /**
   *
   * @desc Allows to get all state or by a specific name
   * @param property - Key name to search in state
   * @returns any
   */
  public getState(property?: string): any {
    const obj = {} as any;
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
  public setState(key: string, value: any, emitValue: boolean = true): void {
    const stateFound = AkariUtility.findProperty(this.getState(), key);

    stateFound && emitValue
      ? this._state.get(key)?.next(value)
      : this._state.set(key, new BehaviorSubject<any>(value));
  }

  /**
   *
   * @desc Listen when the state changes
   * @param key - Key name of state
   * @returns Observable
   */
  public listenState(key: string): Observable<any> {
    const stateFound = AkariUtility.findProperty(this.getState(), key);

    return stateFound
      ? this._state.get(key)!.asObservable()
      : new Observable<any>();
  }

  /**
   * @decs Adding new state to store
   * @param key - Key name of state
   * @param value - Value of state
   * @returns void
   */
  public addState(key: string, value: any): void {
    this._state.set(key, new BehaviorSubject<any>(value));
  }
}
