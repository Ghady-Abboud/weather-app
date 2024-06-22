import React from 'react';
import './App.css';
import City from './components/City';
import backgroundImage from './images/background_image.jpg';
import SearchBar from './components/SearchBar';

/* Dimensions for PC are 2560*/

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

    </div>
  );
}

export default App;
