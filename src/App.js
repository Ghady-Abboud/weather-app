import React from 'react';
import './App.css';
import City from './components/City';
import backgroundImage from './images/background_image.jpg';
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';

/* Dimensions for PC are 2560 and laptop is 1440*/

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>

    <City 
    name = "London" 
    temperature = "27" 
    weather_description = "Partly Sunny" 
    sunrise = "7:15 AM" 
    sunset = "5:55 PM"
    />
    
    <SearchBar />

    <Forecast />

    </div>
  );
}

export default App;
