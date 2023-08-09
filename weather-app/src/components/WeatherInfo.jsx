import React from 'react';

function WeatherInfo({ temperature, weatherMain, tempMin, tempMax }) {
  return (
    <div className="current">
      <div className="temperature">{`${Math.round(temperature)}°C`}</div>
      <div className="weather">{weatherMain}</div>
      <div className="min-max">{`${tempMin}°C / ${tempMax}°C`}</div>
    </div>
  );
}

export default WeatherInfo;
