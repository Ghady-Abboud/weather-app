import React from 'react';
import './City.css';
import sunriseIcon from '../images/sunrise.svg';
import sunsetIcon from '../images/sunset.svg';
import { ClearDay, CloudyDay, RainyDay, SnowyDay, Thunder } from '../images/svgbackground';

const City = (props) => {
  
  let weatherIcon;

  if (200 <= props.weatherID && props.weatherID <= 232) {
    weatherIcon = <Thunder />;
  } else if (300 <= props.weatherID && props.weatherID <= 531) {
    weatherIcon = <RainyDay />;
  } else if (600 <= props.weatherID && props.weatherID <= 622) {
    weatherIcon = <SnowyDay />;
  } else if (801 <= props.weatherID && props.weatherID <= 804) {
    weatherIcon = <CloudyDay />;
  } else if (props.weatherID === 800) {
    weatherIcon = <ClearDay />;
  } else {
    
    weatherIcon = <ClearDay />; 
  }
  
  return (
    <div className="city">
      <div className="city_name">{props.name}</div>

      <div className="city_temperature">
        {weatherIcon}
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
