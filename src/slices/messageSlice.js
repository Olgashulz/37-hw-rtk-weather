import {createSlice} from "@reduxjs/toolkit";

const messageSlice = createSlice(
    {
        name: "message",
        initialState: {
            message: "Enter city name",
        },
        reducers: {
            setMessage(state, action) { // <-- fix typo here
                state.message = action.payload;
            },
        },
    },
);

export const {setMessage} = messageSlice.actions;
export default messageSlice.reducer;