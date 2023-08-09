import React from 'react';

function Location({ name, country, date }) {
  return (
    <section className="location">
      <div className="city">{`${name}, ${country}`}</div>
      <div className="date">{date}</div>
    </section>
  );
}

export default Location;
