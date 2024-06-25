import React from 'react'
import './Forecast.css';
import { ClearDay, CloudyDay, RainyDay, SnowyDay, Thunder } from '../images/svgbackground';

const Forecast = () => {
    const forecastData = [
        { day: "Mon 06/23", icon: <ClearDay />, temperature: 25 },
        { day: "Tue 06/24", icon: <CloudyDay />, temperature: 22 },
        { day: "Wed 06/25", icon: <RainyDay />, temperature: 20 },
        { day: "Thu 06/26", icon: <SnowyDay />, temperature: 5 },
        { day: "Fri 06/27", icon: <Thunder />, temperature: 18 },
        { day: "Sat 06/28", icon: <ClearDay />, temperature: 27 },
        { day: "Sun 06/29", icon: <CloudyDay />, temperature: 23 }
    ];

    return (
        <div className="forecast-container">
            <h1 className="forecast-heading">Daily</h1>
            <div className="forecast-items">
                {forecastData.map((forecast, index) => (
                    <div className="forecast-item" key={index}>
                        <div className="day_of_week"> 
                            <h1>{forecast.day}</h1>
                            <div className="temperature_that_day">
                                <div className="temp_icon">
                                    {forecast.icon}
                                </div>
                                <div className="temp">
                                    {forecast.temperature} °C
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Forecast;
