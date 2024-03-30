import cls from './Weather.module.css'
import Cloud from '../../assets/cloud.svg'
import { days } from '../../constants/Index';

const WeatherStatus = ({temp, wStatus }) => {
    
    const monthArr =["January","February","March","April","May","June","July","August","September","October","November","December"]


    const date = new Date()
    const year = date.getFullYear()
    const day = date.getDay()
    const dates = date.getDate()
    const month = date.getMonth()
    return (
        <div className={cls.flex}>
            <div className={''}>
                <h2 className={cls.wStatus}>{wStatus}</h2>

                <div className={cls.wMobileImg}>
                <img src={Cloud} alt=""/>
            </div>

                <h2 className={cls.wTemp}>{Math.round(temp - 273.15)}°C</h2>
                <p>{days[day-1]} | {dates} {monthArr[month]} {year}</p>
            </div>
            <div className={cls.wImg}>
                <img src={Cloud} alt=""/>
            </div>
        </div>
    );
};

export default WeatherStatus;