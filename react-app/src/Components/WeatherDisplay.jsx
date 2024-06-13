import React from 'react';

const WeatherDisplay = ({ weather, forecast, units, toggleUnits }) => {
  return (
    <div className="weather-display">
      {weather && (
        <div className="current-weather">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp} {units === 'metric' ? '°C' : '°F'}</p>
          <p>Humidity: {weather.main.humidity} %</p>
          <button onClick={toggleUnits}>Toggle to {units === 'metric' ? 'Fahrenheit' : 'Celsius'}</button>
        </div>
      )}
      {forecast && (
        <div className="forecast">
          <h3>5-Day Forecast</h3>
          <div className="forecast-grid">
            {forecast.list.map((item, index) => (
              <div key={index} className="forecast-item">
                <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
                <p>{item.weather[0].description}</p>
                <p>Temp: {item.main.temp} {units === 'metric' ? '°C' : '°F'}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
