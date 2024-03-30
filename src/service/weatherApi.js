import axios from "axios"

class WeatherApi {
    url = "https://api.openweathermap.org/data/2.5/weather?q=";
    url2 = "https://api.openweathermap.org/data/2.5/forecast?q=";

    getCurrentWeather(cityName = "London") {
        const apiKey = import.meta.env.VITE_API_KEY
        return axios(`${this.url}${cityName}&appid=${apiKey}`)
            .then(({ data }) => data)
    }
    
    getWeatherWeek(cityName = "Bishkek") {
        const apiKey = import.meta.env.VITE_API_KEY
        return axios(`${this.url2}${cityName}&cnt=7&appid=${apiKey}`)
            .then(({ data }) => data)
    }
}
export default new WeatherApi()