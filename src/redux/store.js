import {configureStore} from "@reduxjs/toolkit";
import menuReducer from "../features/menuSlice";
import cartReducer from "../features/miniCartSlice";
import {registerReducer} from "../features/registerSlice";
import {otpReducer} from "../features/otpSlice";

const store = configureStore({
    reducer: {
        showMenu: menuReducer,
        showCart: cartReducer,
        register: registerReducer,
        otp: otpReducer,
    }
})

export default store;