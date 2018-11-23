import React from 'react'

export default function Searchbar ({ search, onSearch }) {
    return (
      <div className="App">
        <input 
          type="text"
          name="search"
          placeholder="Search" 
          value={search} 
          onChange={onSearch}>
        </input>
      </div>
    )
  }