import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import './SearchResults.css';

const SearchResults = () => {
  const { searchQuery } = useContext(StoreContext);

  return (
    <div className='search-results'>
      <h2>Search Results for: "{searchQuery}"</h2>
      <FoodDisplay category="All" />
    </div>
  );
};

export default SearchResults;
