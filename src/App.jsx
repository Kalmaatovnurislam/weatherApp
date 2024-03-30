import { useEffect, useState } from 'react';
import WeatherApi from "./service/weatherApi.js";
import Header from "./components/header/Header.jsx";
import WeatherStatus from "./components/weather-status/WeatherStatus.jsx";
import WeatherContent from './components/weather-content/WeatherContent.jsx';
import WeatherCountry from './components/weather-country/WeatherCountry.jsx';
import SideBar from './components/sidebar/SideBar.jsx';
import WeatherInfo from './components/weather-info/WeatherInfo.jsx';


const App = () => {
    const [city, setCity] = useState(null)
    useEffect(() => {
        const getWeatherData = async () => {
            const data = await WeatherApi.getCurrentWeather()
            console.log(data, "-------------")
            setCity(data)

        }
        getWeatherData();

    }, []);
    if (city === null) {
        return <h1>loading...</h1>
    }
    return (
        <div className='container'>
            <Header cityName={city.name} />
            <WeatherStatus wStatus={city.weather[0].main}
             temp={city.main.temp} />
            <WeatherContent>
                <SideBar/>
                <WeatherCountry/>
                <WeatherInfo/>
            </WeatherContent>
        </div>
    );
};

export default App;