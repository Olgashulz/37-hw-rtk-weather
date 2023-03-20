import {useSelector} from "react-redux";

const Weather = () => {
    const {message} = useSelector(store => store.message);
    const {weatherInfo: weather} = useSelector(store => store.weather);
    if (message) {
        return (
            <div>
                <p>{message}</p>
            </div>
        )
    } else {
        return (
            <div className="infoWeath">
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>
            </div>
        );
    }
};

export default Weather;