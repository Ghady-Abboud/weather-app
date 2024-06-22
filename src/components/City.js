import React from 'react'
import sunriseIcon from '../images/sunrise.svg'
import sunsetIcon from '../images/sunset.svg'

const City = (props) => {
  return (
    <div className="city">
      <div className="city_name">{props.name} </div>
      <div className="city_temperature"> {props.temperature} °C </div>
      <div className="weather_description">{props.weather_description}</div>

      <div className="time_of_sunrise">
        <img src ={sunriseIcon} alt="Sunrise" className="icon"/>{props.sunrise}
      </div>

      <div className="time_of_sunset">
        <img src={sunsetIcon} alt = "Sunset" className="icon"/>{props.sunset}
      </div>

    </div>
  )
}

export default City
