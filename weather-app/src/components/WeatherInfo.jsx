import React from 'react';

function WeatherInfo({ temperature, weatherMain, tempMin, tempMax }) {
  return (
    <div className="current">
      <div className="temperature">{`${Math.round(temperature)}°C`}</div>
      <div className="weather">{weatherMain}</div>
      <div className="min-max">
        <p id='tempMin'>{tempMin}°C</p><p id='slash'>/</p><p id='tempMax'> {tempMax}°C</p></div>
    </div>
  );
}

export default WeatherInfo;
