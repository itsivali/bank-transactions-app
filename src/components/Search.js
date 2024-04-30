import React from 'react';

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="form-control" // Apply the same class used for styling text boxes
      />
    </div>
  );
};

export default Search;
