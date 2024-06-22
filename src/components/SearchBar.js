import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <input
          type="text"
          className="input"
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className={`close-btn ${isFocused ? 'active' : ''}`}>&times;</div>
      </div>
    </div>
  );
};

export default SearchBar;
