import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LatestBooks() { 
  const [latestBooks, setLatestBooks] = useState([]);

  useEffect(() => {
    const fetchLatestBooks = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction,romance,Fantasy,&maxResults=12');
        setLatestBooks(response.data.items);
      } catch (error) {
        console.error('Error fetching latest books:', error);
      }
    };

    fetchLatestBooks();
  }, []);

  return (
    <Container>
      <h3 className='text-center my-5'>
        Top 12 Latest Books
      </h3>
      <div className='row my-5'>
        {latestBooks.map(book => (
          <div className='col-3' key={book.id}>
            <BookCard data={book.volumeInfo} />
          </div>
        ))}
      </div>
      <div className='d-flex justify-content-center'> 
       <Link to="/Books" className='btn btn-small btn-outline-danger'>See more</Link>
      </div>
    </Container>
  );
}

export default LatestBooks;
