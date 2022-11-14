import { AkariStateProvider } from "../classes";
export const useAkariStateProvider = (initialState) => {
    return new AkariStateProvider(initialState);
};
