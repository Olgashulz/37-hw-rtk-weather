import {createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice(
    {
        name: "weather",
        initialState: {
            weatherInfo: {
                country: "",
                city: "",
                temp: "",
                pressure: "",
                sunset: ""
            },
            message: "Enter city name"
        },
        reducers: {
            setInfo(state, action) {
                console.log(state.weatherInfo)
                state.weatherInfo = action.payload
            },
            pendingInfo(state) {
                state.weatherInfo = "Pending..."
            },
            errorInfo(state) {
                state.weatherInfo = "Error..."
            },
            setMessage(state, action) { // <-- fix typo here
                state.message = action.payload;
            },
        }
    }
)

export const {setInfo, pendingInfo, errorInfo, setMessage} = weatherSlice.actions;
export default weatherSlice.reducer;