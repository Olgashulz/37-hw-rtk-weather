import {API_key, BASE_URL} from "../utils/constans";
import {errorInfo, pendingInfo, setInfo} from "../slices/weatherSlice";
import {setMessage} from "../slices/messageSlice";

export const fetchWeather = (city) => {
    return async (dispatch) => {
        dispatch(pendingInfo());
        try {
            const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_key}&units=metric`);
            if (!response.ok) {
                throw new Error(response.status + "")
            }
            const data = await response.json();
            dispatch(setInfo({
                country: data.sys.country,
                city: data.name,
                pressure: data.main.pressure,
                temp: data.main.temp,
                sunset: data.sys.sunset
            }));
            dispatch(setMessage(""));
        } catch (e) {
            dispatch(setInfo(undefined));
            dispatch(errorInfo(e.message));
            dispatch(setMessage("Enter corrected city"))
        }
    };
}