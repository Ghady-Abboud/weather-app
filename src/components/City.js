import React from 'react'

const City = (props) => {
  return (
    <div className="city">
      <div className="city_name">{props.name} </div>
      <div className="city_temperature"> {props.temperature} °C </div>
      <div className="weather_description">{props.weather_description}</div>
      <div className="time_of_sunrise">Sunrise: {props.sunrise}</div>
      <div className="time_of_sunset">Sunset: {props.sunset}</div>
    </div>
  )
}

export default City
