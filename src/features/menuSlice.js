import { createSlice }  from"@reduxjs/toolkit"

const initialState = {
    copiedMenu: "",
    copyNav: "",
    copyTopNav: "",
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        copyMenu: (state, action) => {
            state.copyMenu = action.payload
        },

        copyNav: (state, action) => {
            state.copyNav = action.payload
        },

        copyTopNav: (state, action) => {
            state.copyTopNav = action.payload
        },
    }
});

export default menuSlice.reducer;
export const menuActions = menuSlice.actions;