# Weather Dashboard

A React application that displays the current weather and a 5-day forecast for a given city. The application also allows users to save their favorite cities and switch between Celsius and Fahrenheit.

## Features

- Search for a city and display the current weather and 5-day forecast.
- Add cities to a list of favorites.
- Remove cities from the list of favorites.
- Display weather data for favorite cities.
- Toggle between Celsius and Fahrenheit.
- Remember the last searched city using local storage.

## Demo

Check out the live demo of the application: [Weather Dashboard](https://your-vercel-app-url.vercel.app)

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js and npm installed on your machine.
- An API key from [OpenWeatherMap](https://openweathermap.org/api).

### Obtaining an API Key from OpenWeatherMap

1. Go to the [OpenWeatherMap API](https://openweathermap.org/api) website.
2. Sign up for a free account if you don't already have one.
3. After logging in, go to the "API keys" section of your profile.
4. Generate a new API key.
5. Copy the API key.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
2. Install the dependencies:

   npm install

3. Create a .env file in the root directory and add your OpenWeatherMap API key:

   REACT_APP_OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
   
Running the Application

1) Start the JSON server:

   json-server --watch db.json --port 5000

2) Start the React application:

   npm start
