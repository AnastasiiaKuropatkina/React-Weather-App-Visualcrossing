import React, { useState } from "react";

import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import Forecast from './components/forecast/forecast';
import { WEATHER_API_VC_URL, WEATHER_API_VC_KEY } from './api';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  //const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_VC_URL}${lat}%2C${lon}?key=${WEATHER_API_VC_KEY}&unitGroup=metric`);
    //const forecastFetch = fetch(`${WEATHER_API_VC_URL}${lat}%2C${lon}?key=${WEATHER_API_VC_KEY}&unitGroup=metric`);

    console.log('searchData-->', searchData)

    Promise.all([currentWeatherFetch])
        .then(async(responses) => {
            const weatherResponse = await responses[0].json();
            //const forecastResponse = await responses[1].json();

            setCurrentWeather({city: searchData.label, ...weatherResponse});
            //setForecast({city: searchData.label, ...forecastResponse});
        })
        .catch((error) => {
            console.error(error);
        });
  }

  return (
    <div className="container">
      <Search onSearchChange= {handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {currentWeather && <Forecast data={currentWeather}/>}
    </div>
  );
}

export default App;