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
            }
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
            }
        }
    }
)

export const {setInfo, pendingInfo, errorInfo} = weatherSlice.actions;
export default weatherSlice.reducer;