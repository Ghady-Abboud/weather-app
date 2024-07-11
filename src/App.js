import React, { useState, useEffect } from 'react';
import './App.css';
import City from './components/City';
import backgroundImage from './images/background_image.jpg';
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const convertKelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(0);
  };

  useEffect(() => {
    // Fetch weather data when component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/current?city=London`); // Replace 'London' with userInput
        if (!response.ok) {
          throw new Error("Failed to fetch the weather data");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <SearchBar setWeatherData={setWeatherData} hasData={!!weatherData} />
      
      {weatherData && (
        <>
          <City 
            name={weatherData.name}
            temperature={convertKelvinToCelsius(weatherData.temperature)}
            weather_description={weatherData.description.charAt(0).toUpperCase() + weatherData.description.substring(1)}
            humidity={weatherData.humidity}
            sunrise={weatherData.sunrise}
            sunset={weatherData.sunset}
            country={weatherData.country}
            weatherID = {weatherData.weatherID}
          />
          <Forecast />
        </>
      )}
    </div>
  );
}

export default App;
