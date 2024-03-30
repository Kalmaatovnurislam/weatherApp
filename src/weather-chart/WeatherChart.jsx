import React from 'react'

import { LineChart, Line,Tooltip,XAxis,YAxis } from 'recharts';
const data = [
    {
        name:'11.7km/h Now',

        weather: 26
    },
    {
        name:'9.3km/h  22:00',
       
        weather: 26
    },
    {
        name:'12km/h   00:00',
      
        weather: 20
    },
    {
        name:'15km/h 2:00',
        weather: 16 
    },
    {
        name:'15km/h 4:00',
        weather: 20
    },
    {
        name:'15km/h 6:00  ',
        weather: 22
    },
    {
        name:'15km/h 8:00  ',
        weather: 16
    },
]


const WeatherChart = () => {
    return (
        <div>
            <LineChart margin={{top:80}} width={780} height={180} data={data}>
                <Line 
                dot={<p>Lorem</p>}
                type="monotone" dataKey="weather" stroke="#FFC355 " />
                <Tooltip />
                <XAxis dataKey="name" style={{fontSize:"12px",}} />
                <YAxis style={{display:"none"
               }}/>
            </LineChart>
        </div>
    )
}

export default WeatherChart