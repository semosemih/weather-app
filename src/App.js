import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = '163e47a4291b5042807f38e9a2e70585'; 
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      <WeatherInfo weather={weather} />
    </div>
  );
};

export default App;
