import { createSlice }  from"@reduxjs/toolkit"

const initialState = {
    showCart: false,
}

const menuSlice = createSlice({
    name: "miniCart",
    initialState,
    reducers: {
        showMenu: (state, action) => {
            state.showCart = true
        },

        closeMenu: (state, action) => {
            state.showCart = false
        },
    }
});

export default menuSlice.reducer;
export const menuActions = menuSlice.actions;