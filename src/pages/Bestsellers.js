import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import { Container } from 'react-bootstrap';

function Bestsellers() { 
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction,romance,Fantasy&maxResults=20');
        const books = response.data.items || [];
        setBestsellers(books);
      } catch (error) {
        console.error('Error fetching bestselling books:', error);
      }
    };

    fetchBestsellers();
  }, []);

  return (
    <Container>
      <h3 className='text-center my-5'>
        Top 20 Bestsellers
      </h3>
      <div className='row'>
        {bestsellers.map((book, index) => (
          <div className='col-3' key={index}>
            <BookCard data={book.volumeInfo} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Bestsellers;
