import React, { useState, useEffect } from 'react';
import SearchCity from './SearchCity';
import WeatherDisplay from './WeatherDisplay';
import FavoriteCities from './FavoriteCities';
import { fetchWeatherData, fetchForecastData, fetchFavoriteCities, addFavoriteCity, removeFavoriteCity } from '../api';

const WeatherDashboard = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [units, setUnits] = useState('metric');

  const loadFavoriteCities = async () => {
    const data = await fetchFavoriteCities();
    setFavorites(data);
  };

  useEffect(() => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
      handleSearch(lastCity);
    }
    loadFavoriteCities();
  },[]);

  
  const handleSearch = async (city) => {
    const weatherData = await fetchWeatherData(city, units);
    const forecastData = await fetchForecastData(city, units);
    setWeather(weatherData);
    setForecast(forecastData);
    localStorage.setItem('lastCity', city);
  };

  const handleAddFavorite = async () => {
    if (weather) {
      await addFavoriteCity(weather.name);
      loadFavoriteCities();
    }
  };

  const handleRemoveFavorite = async (id) => {
    await removeFavoriteCity(id);
    loadFavoriteCities();
  };

  const toggleUnits = () => {
    const newUnits = units === 'metric' ? 'imperial' : 'metric';
    setUnits(newUnits);
    if (weather) {
      handleSearch(weather.name);
    }
  };

  return (
    <div className="weather-dashboard">
      <SearchCity onSearch={handleSearch} />
      <button onClick={handleAddFavorite}>Add to Favorites</button>
      <WeatherDisplay weather={weather} forecast={forecast} units={units} toggleUnits={toggleUnits} />
      <FavoriteCities favorites={favorites} onRemove={handleRemoveFavorite} />
    </div>
  );
};

export default WeatherDashboard;
