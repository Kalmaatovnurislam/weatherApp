import  cls  from './weather-content.module.css'

const WeatherContent = ({ children }) => {
  return (
    <div className='container'>
      <div className={cls.flex}>

      {children}
      </div>
    </div>
  )
}

export default WeatherContent