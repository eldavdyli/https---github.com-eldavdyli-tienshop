import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookDetails({ bookId }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        if (response.status === 200) {
          setBook(response.data);
        } else {
          console.error('Failed to fetch book details:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching book details:', error.message);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  return (
    <div>
      {book ? (
        <div>
          <h2>{book.volumeInfo.title}</h2>
          <p>Authors: {book.volumeInfo.authors.join(', ')}</p>
          <p>Description: {book.volumeInfo.description}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BookDetails;
