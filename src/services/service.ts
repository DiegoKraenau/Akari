import { AkariStateProvider } from "../classes";

export const useAkariStateProvider = (initialState: any) => {
  return new AkariStateProvider(initialState);
};
