
import React from 'react';
import './Forecast.css';
import { getWeatherIcon } from './WeatherIcons';


const Forecast = ({ forecastData }) => {
  if (!forecastData) {
    return null;
  }

  const formatDate = (dateString) => {
    const options = { weekday: 'long' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="forecast-container">
      <h1 className="forecast-heading">Daily</h1>
      <div className="forecast-items">
        {forecastData.map((forecast, index) => (
          <div className="forecast-item" key={index}>
            <div className="day_of_week">
              <h1>{formatDate(forecast.date)}</h1>
              <div className="temperature_that_day">
                <div className="temp_icon">
                  {getWeatherIcon(forecast.weatherID)}
                </div>
                <div className="temp">
                  {forecast.temp} °C
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
