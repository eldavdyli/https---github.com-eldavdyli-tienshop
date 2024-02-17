import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard'; 

function Children() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=children');
        setBooks(response.data.items || []); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop:'20px'}}>Children Books</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {books.map(book => (
            <div className="col-3" key={book.id}>
              <BookCard data={book.volumeInfo} /> 
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Children;
