import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import { Container, Button } from 'react-bootstrap';

function PageSwitcher({ currentPage, totalPages, onPageChange }) {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 7;
    const maxPageDifference = Math.floor(maxPagesToShow / 2);
    let startPage = currentPage - maxPageDifference;
    let endPage = currentPage + maxPageDifference;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPages, maxPagesToShow);
    }
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const pages = generatePageNumbers();

  return (
    <div>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outline-danger"
      >
        Previous
      </Button>
      {pages.map(pageNumber => (
        <Button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          variant={pageNumber === currentPage ? "danger" : "outline-none"}
        >
          {pageNumber}
        </Button>
      ))}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="outline-danger"
      >
        Next
      </Button>
    </div>
  );
}

function Books() {
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=horror,fantasy,children,humor,fiction,horror,action,romance,animation,adventure&startIndex=${(currentPage - 1) * 24}&maxResults=24`);
        if (response.status === 200) {
          if (response.data.items) {
            const sortedBooks = response.data.items.sort((a, b) => {
              // Get average rating or default to 0
              const ratingA = a.volumeInfo.averageRating || 0;
              const ratingB = b.volumeInfo.averageRating || 0;
              // Sort books based on their ratings in descending order
              return ratingB - ratingA;
            });
            setBooks(sortedBooks);
            setTotalPages(Math.ceil(response.data.totalItems / 24));
          } else {
            setBooks([]); // Set books to empty array if no items are found
            setTotalPages(1);
          }
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [currentPage]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <Container className='my-5'>
      <div className="text-center mb-4">
        <h2>Books</h2>
      </div>
      <div className='row'>
        {books.length > 0 ? (
          books.map(book => (
            <div className='col-3' key={book.id}>
              <BookCard data={book.volumeInfo} />
            </div>
          ))
        ) : (
          <div>No books found</div>
        )}
      </div>
      <PageSwitcher currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </Container>
  );
}

export default Books;
