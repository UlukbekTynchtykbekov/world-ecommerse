import {configureStore} from "@reduxjs/toolkit";
import menuReducer from "../features/menuSlice";
import cartReducer from "../features/miniCartSlice";
const store = configureStore({
    reducer: {
        showMenu: menuReducer,
        showCart: cartReducer,
    }
})

export default store;