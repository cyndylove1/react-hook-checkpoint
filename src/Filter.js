// Filter.js
import React from 'react';

const Filter = ({ title, rate, onTitleChange, onRateChange }) => (
  <div className="filter">
    <input
      type="text"
      placeholder="Search by title"
      value={title}
      onChange={onTitleChange}
    />
    <input
      type="number"
      placeholder="Filter by rating"
      value={rate}
      onChange={onRateChange}
    />
  </div>
);

export default Filter;
