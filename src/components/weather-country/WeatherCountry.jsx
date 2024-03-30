import WeatherChart from '../../weather-chart/WeatherChart'
import WeatherWeek from '../weather-info/WeatherWeek/WeatherWeek'
import cls from './weather-country.module.css'

const WeatherCountry = () => {
  return (
    <div>
        <div className={cls.country__wrap}>
        Weather Country</div>
        <div className={cls.country__wrapMiddle}>
          <WeatherWeek/>
        </div>
        <div className={cls.country__wrap}>
          <WeatherChart/>
        </div>
    </div>
  )
}

export default WeatherCountry