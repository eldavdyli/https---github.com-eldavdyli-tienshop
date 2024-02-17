// SearchResultPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

function SearchResultPage({ match }) {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchQuery = match.params.query;

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
        setSearchResults(response.data.items || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div>
      <h1>Search Results for "{searchQuery}"</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {searchResults.map(book => (
            <div className="col-3" key={book.id}>
              <BookCard data={book.volumeInfo} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResultPage;
