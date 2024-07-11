import React, { useState } from 'react';
import './SearchBar.css';  

const SearchBar = ({ setWeatherData }) => { 
  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const clearInput = () => {
    setUserInput('');
  };

  const handleSearch = async (event) => {
    if(event.key === 'Enter') {
      clearInput();
      try {
        const response = await fetch(`http://localhost:5000/current?city=${userInput}`);
        if (!response.ok) {
          throw new Error("Failed to fetch the weather data");
        }
        
        const data = await response.json();
        setWeatherData(data); 

      } catch(error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <input
          type="text"
          className="input"
          placeholder="Search"
          value={userInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(event) => setUserInput(event.target.value)}
          onKeyDown={handleSearch}
        />
        <div
          className={`close-btn ${isFocused ? 'active' : ''}`}
          onClick={clearInput}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
