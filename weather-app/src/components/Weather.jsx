import React, { useState } from 'react';
import '../Style/Weather.css';

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function handleSearch(event) {
    event.preventDefault();

    if (!city) {
      alert("Please enter a city name!");
      return;
    }

    const apiKey = "7ef359e8cb6ded19dd4ec52b3691eee8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

  function handleCancel() {
    setCity("");          
    setWeatherData(null); 
  }

  return (
    <div className="cont">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="btn btn-info btn-sm w-25">
          Search
        </button>
      </form>

      {weatherData && weatherData.main ? (
        <>
          <h2>{weatherData.name}</h2>
          <p>Temperature: <span>{weatherData.main.temp}°C</span></p>
          <p>Condition: <span>{weatherData.weather[0].description}</span></p>
          <p>Humidity: <span>{weatherData.main.humidity}%</span></p>
          <p>Wind Speed: <span>{weatherData.wind.speed} m/s</span></p>
        </>
      ) : (
        <p>Search for a city to see the weather 🌤️</p>
      )}

      <button onClick={handleCancel} className="btn btn-danger">
        Cancel
      </button>
    </div>
  );
}

export default Weather;
