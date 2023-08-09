import React from 'react';

function SearchBox({ query, onInputChange, onKeyDown }) {
  return (
    <header>
      <input
        type="text"
        autoComplete="off"
        className="search-box"
        placeholder="Location"
        value={query}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
    </header>
  );
}

export default SearchBox;

