import { BehaviorSubject } from "rxjs";

export class AkariUtility {
  /**
   *
   * @desc Allows to set initial state to provider
   * @param initialState - Initial state
   * @returns Map<string, BehaviorSubject<any>>
   */
  public static convertToObservable(
    initialState: any
  ): Map<string, BehaviorSubject<any>> {
    const state = new Map<string, BehaviorSubject<any>>();
    Object.keys(initialState).forEach((x: string) => {
      state.set(x, new BehaviorSubject<any>(initialState[x]));
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
  public static findProperty(data: any, field: string): boolean {
    if (!data.hasOwnProperty(field)) {
      const errorMessage = `State ${field} was not created.`;
      console.warn(errorMessage);
      return false;
    }

    return true;
  }
}
