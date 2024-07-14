import React from 'react';
import './City.css';
import sunriseIcon from '../images/sunrise.svg';
import sunsetIcon from '../images/sunset.svg';
import { getWeatherIcon } from './WeatherIcons';

const City = (props) => {
  
  const WeatherIcon = getWeatherIcon(props.weatherID);
  
  return (
    <div className="city">
      <div className="city_name">{props.name}</div>

      <div className="city_temperature">
        {WeatherIcon}
        {props.temperature} °C 
      </div>

      <div className="weather_description">{props.weather_description}</div>

      <div className="time_of_sunrise">
        <img src={sunriseIcon} alt="Sunrise" className="icon" />{props.sunrise} AM
      </div>

      <div className="time_of_sunset">
        <img src={sunsetIcon} alt="Sunset" className="icon" />{props.sunset} PM
      </div>
    </div>
  );
};

export default City;
