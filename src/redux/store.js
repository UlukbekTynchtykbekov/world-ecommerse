import {configureStore} from "@reduxjs/toolkit";
import menuReducer from "../features/menuSlice";
import cartReducer from "../features/miniCartSlice";
import {registerReducer} from "../features/registerSlice";
import {otpReducer} from "../features/otpSlice";
import {authReducer} from "../features/authSlice";
import {authMeReducer} from "../features/authMeSlice";

const store = configureStore({
    reducer: {
        showMenu: menuReducer,
        showCart: cartReducer,
        register: registerReducer,
        otp: otpReducer,
        auth: authReducer,
        authMe: authMeReducer,
    }
})

export default store;