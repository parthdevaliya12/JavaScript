import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import searchSlice from "./features/searchSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        search: searchSlice
    },

})