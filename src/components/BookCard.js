import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function truncateDescription(description) {
  if (!description) {
    return ""; 
  } else if (description.length <= 80) {
    return description;
  } else {
    return `${description.substring(0, 80)}...`;
  }
}

function BookCard({ bookId, data }) {
  const truncatedDescription = truncateDescription(data.description);
  
  return (
    <Card className='mb-4' style={{ width: '300px', height: '450px', position: 'relative', border: '1px solid white' }}>
      <Card.Img variant="top" src={data.imageLinks?.thumbnail} alt={data.title} style={{ height: '50%', width: '70%', paddingLeft: '70px', paddingTop: '20px' }} />
      <div>
        <Card.Body style={{ paddingLeft: '50px' }}>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            {truncatedDescription}
          </Card.Text>
        </Card.Body>
        <div style={{ position: 'absolute', bottom: '20px', width: '100%', paddingLeft: '70px' }}>
        <Link to={`/book/${bookId}/details`} className='btn btn-outline-danger'>View Details</Link>

        </div>
      </div>
    </Card>
  );
}

export default BookCard;
