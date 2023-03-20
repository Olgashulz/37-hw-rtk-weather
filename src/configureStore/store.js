import {configureStore} from "@reduxjs/toolkit";
import weather from "../slices/weatherSlice";
import message from '../slices/messageSlice'


export const store = configureStore({
    reducer: {
        weather, message
    }
})
