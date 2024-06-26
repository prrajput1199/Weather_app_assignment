const API_KEY = '7ae88760e877c5a1afcc0ed55c0770e9'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'http://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city, units = 'metric') => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&units=${units}&appid=${API_KEY}`);
  return await response.json();
};

export const fetchForecastData = async (city, units) => {
  const response = await fetch(`${BASE_URL}/forecast?q=${city}&units=${units}&appid=${API_KEY}`);
  return await response.json();
};

export const fetchFavoriteCities = async () => {
  const response = await fetch('http://localhost:5000/favorites');
  return await response.json();
};

export const addFavoriteCity = async (city) => {
  const response = await fetch('http://localhost:5000/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ city })
  });
  return await response.json();
};

export const removeFavoriteCity = async (id) => {
  await fetch(`http://localhost:5000/favorites/${id}`, {
    method: 'DELETE'
  });
};
