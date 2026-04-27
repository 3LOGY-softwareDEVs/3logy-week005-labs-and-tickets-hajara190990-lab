import { useState, useEffect } from 'react';
import "./App.css";

function App() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch weather data
  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`https://wttr.in/${cityName}?format=j1`);
      if (!res.ok) throw new Error('Failed to fetch weather data');
      const data = await res.json();

      // Extract useful info
      const current = data.current_condition[0];
      setWeather({
        temp: current.temp_C,
        condition: current.weatherDesc[0].value,
        humidity: current.humidity,
        wind: current.windspeedKmph,
      });
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on load and when city changes
  useEffect(() => {
    fetchWeather(city);

    // Auto-refresh every 60s
    const intervalId = setInterval(() => {
      fetchWeather(city);
    }, 60000);

    // Cleanup
    return () => clearInterval(intervalId);
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCity = e.target.elements.city.value.trim();
    if (inputCity) {
      setCity(inputCity);
    }
  };

  return (
    <div className="app-container">
      <h1>🌤️ Weather Dashboard</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input type="text" name="city" placeholder="Enter city..." />
        <button type="submit">Search</button>
      </form>

      {loading && <p className="loading">Loading weather data...</p>}
      {error && <p className="error">Error: {error}</p>}

      {weather && !loading && !error && (
        <div className="weather-card">
          <h2>{city}</h2>
          <p><strong>Temperature:</strong> {weather.temp} °C</p>
          <p><strong>Condition:</strong> {weather.condition}</p>
          <p><strong>Humidity:</strong> {weather.humidity}%</p>
          <p><strong>Wind:</strong> {weather.wind} km/h</p>
        </div>
      )}
    </div>
  );
}

export default App;
