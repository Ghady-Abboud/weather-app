const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 5000;
const API_KEY = "75b984cadb2a640e7bbe4501f38aab74";

app.get("/current", async (req, res) => {
  try {
    const cityName = req.query.city;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);

    const WeatherData = {
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      sunrise: convertUnixToTime(response.data.sys.sunrise, response.data.timezone),
      sunset: convertUnixToTime(response.data.sys.sunset, response.data.timezone),
      country: response.data.sys.country,
      timezoneOffset: response.data.timezone,
      weatherID: response.data.weather[0].id
    };

    res.json(WeatherData);
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching weather data');
  }
});

function convertUnixToTime(timestamp, timezoneOffset) {
  const date = new Date((timestamp + timezoneOffset) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
