import {configureStore} from "@reduxjs/toolkit";
import menuReducer from "../features/menuSlice";
const store = configureStore({
    reducer: {
        copyMenu: menuReducer,
    }
})

export default store;