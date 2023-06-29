import {configureStore} from "@reduxjs/toolkit";
import menuReducer from "../features/menuSlice";
const store = configureStore({
    reducer: {
        showMenu: menuReducer,
    }
})

export default store;