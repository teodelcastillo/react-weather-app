import React, { useState } from 'react';
import './App.css';

const api = {
  key: "2fa73590fd8b5a4c6e68098ad5625395",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(response => response.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }

  const dateBuilder = (d) => {
    // Función dateBuilder aquí...
  }

  return (
    <div className="app-wrap">
      <header>
        <input
          type="text"
          autoComplete="off"
          className="search-box"
          placeholder="Location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </header>

      <main>
        <section className="location">
          <div className="city">{`${weather.name}, ${weather.sys ? weather.sys.country : ''}`}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </section>

        <div className="current">
          <div className="temperature">{`${Math.round(weather.main ? weather.main.temp : '')}°C`}</div>
          <div className="weather">{weather.weather ? weather.weather[0].main : ''}</div>
          <div className="min-max">{`${weather.main ? weather.main.temp_min : ''}°C / ${weather.main ? weather.main.temp_max : ''}°C`}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
