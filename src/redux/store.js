import {configureStore} from "@reduxjs/toolkit";
import menuReducer from "../features/menuSlice";
import cartReducer from "../features/miniCartSlice";
import {authReducer} from "../features/auth";

const store = configureStore({
    reducer: {
        showMenu: menuReducer,
        showCart: cartReducer,
        auth: authReducer,
    }
})

export default store;