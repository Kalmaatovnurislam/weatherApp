import cls from './weather-week.module.css'
import { days } from '../../../constants/Index'
import {useEffect, useState} from "react"
import weatherApi from '../../../service/weatherApi'


 const iconUrl ="https://openweathermap.org/img/wn/"


const WeatherWeek = () => {
    const [city, setCity] =useState (null)

    useEffect(() => {
        const getWeatherWeek = async () => { 
            const data = await weatherApi.getWeatherWeek()
            console.log(data,'---data---');
            setCity(data)
        }
        getWeatherWeek()
     }, [])

     if(city ==null){
        return <h2>Loading...</h2>
     }
     const {list} = city

  return (
    <div className={cls.flex}>
      {days.map((day,index) => {
        let icon = list[index].weather[0].icon
        return <div
        onClick={() =>{
            console.log("Test")
        }}
        key={day}>
          <h4>{day.slice(0,3).toUpperCase()}</h4>
          <img width={40} src={iconUrl + icon +"@2x.png"} alt="icon" />
        </div>
      })}
    </div>
  )
}

export default WeatherWeek
