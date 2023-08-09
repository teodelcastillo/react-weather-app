import React, { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import Location from './components/Location';
import WeatherInfo from './components/WeatherInfo';

const api = {
  key: "2fa73590fd8b5a4c6e68098ad5625395",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (evt) => {
    if (evt.key === "Enter") {
      try {
        const response = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
        const result = await response.json();
        setWeather(result);
        setQuery('');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };


  const dateBuilder = (d) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
  
    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="app-wrap">
      <SearchBox
        query={query}
        onInputChange={(e) => setQuery(e.target.value)}
        onKeyDown={search}
      />

      <main>
        <Location
          name={weather.name || 'Your location'}
          country={weather.sys ? weather.sys.country : ''}
          date={dateBuilder(new Date())}
        />

        <WeatherInfo
          temperature={weather.main ? weather.main.temp : ''}
          weatherMain={weather.weather ? weather.weather[0].main : ''}
          tempMin={weather.main ? weather.main.temp_min : ''}
          tempMax={weather.main ? weather.main.temp_max : ''}
        />
      </main>
    </div>
  );
}

export default App;
