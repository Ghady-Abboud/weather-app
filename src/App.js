import React, { useState } from 'react';
import './App.css';
import City from './components/City';
import backgroundImage from './images/background_image.jpg';
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';

function App() {
  const [weatherData, setWeatherData] = useState(null); 

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <SearchBar setWeatherData={setWeatherData} hasData={!!weatherData} />
      
      {weatherData && (
        <>
          <City 
            name={weatherData.name}
            temperature={weatherData.temperature}
            weather_description={weatherData.description.charAt(0).toUpperCase() + weatherData.description.substring(1)}
            humidity={weatherData.humidity}
            sunrise={weatherData.sunrise}
            sunset={weatherData.sunset}
            country={weatherData.country}
          />
          <Forecast />
        </>
      )}
    </div>
  );
}

export default App;
