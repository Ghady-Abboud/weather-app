const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

const API_KEY = "1a0d99a29e994ebdbd724500242606"
const current_URL = "http://api.weatherapi.com/v1/current.json";
const forecast_URL = "http://api.weatherapi.com/v1/forecast.json";
const countries_URL = "https://countriesnow.space/api/v0.1/countries";


app.get("/current" , async (req,res) => {
    const {city} = req.query;

    try {
        const response = await axios.get(current_URL, {params : {
            key : API_KEY,
            q : city
        }
    }

    );

    const {city:name, country} = response.data.location;
    
    
    res.json(response.data);

} catch (error) {
    res.status(500).json({error:"Failed to fetch current weather data"});
}

});



app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});