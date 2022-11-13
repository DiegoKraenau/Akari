"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAkariStateProvider = void 0;
const classes_1 = require("../classes");
const useAkariStateProvider = (initialState) => {
    return new classes_1.AkariStateProvider(initialState);
};
exports.useAkariStateProvider = useAkariStateProvider;
