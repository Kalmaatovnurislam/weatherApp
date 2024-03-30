import WeatherWeek from './WeatherWeek/WeatherWeek'
import cls from './weather-info.module.css'

const WeatherInfo = () => {
  return (
    <div className={cls.info__wrap}>
      <WeatherWeek />
    </div>
  )
}

export default WeatherInfo