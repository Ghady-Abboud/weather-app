import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedCity , setselectedCity] = useState(null);
    const [weatherData, setweatherData] = useState(null);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.length > 0) {
                try {
                    const response = await axios.get(`http://localhost:5000/countries`, {
                        params: { search: query }
                    });
                    setSuggestions(response.data);
                    setShowSuggestions(true);
                } catch (error) {
                    console.error("Error fetching suggestions", error);
                }
            } else {
                setSuggestions([]);
                setShowSuggestions(false);
            }
        };

        fetchSuggestions();
    }, [query]);

    const handleSuggestionClick = (country, city = null) => {
        setQuery(city ? `${city}, ${country}` : country);
        setShowSuggestions(false);
    };

    return (
        <div className="wrapper">
            <div className="container">
                <input 
                    type="text" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder="Search for a city"
                    className="input"
                />
                <span className={`close-btn ${query.length > 0 ? 'active' : ''}`} onClick={() => setQuery('')}>&times;</span>
                {showSuggestions && (
                    <ul className="suggestions">
                        {suggestions.map((suggestion, index) => (
                            <li key={index} className="suggestion-item">
                                <strong onClick={() => handleSuggestionClick(suggestion.country)}>
                                    {suggestion.country}
                                </strong>
                                <ul className="city-list">
                                    {suggestion.cities
                                        .filter(city => city.toLowerCase().includes(query.toLowerCase()))
                                        .map((city, i) => (
                                            <li key={i} onClick={() => handleSuggestionClick(suggestion.country, city)}>
                                                {city}
                                            </li>
                                        ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
