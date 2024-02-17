import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Horror from '../pages/Horror';

function Header() {
  const [genres, setGenres] = useState([]);
  const [loadingGenres, setLoadingGenres] = useState(true);
  const [query, setQuery] = useState ('')
  const [books, setBooks] = useState([]); // Define books sta

  const genreList = [
    'horror',
    'fantasy',
    'children',
    'humor',
    'fiction',
    'action',
    'romance',
    'animation'
  ];

  useEffect(() => {
    
    setGenres(genreList);
    setLoadingGenres(false);
  }, []);

  useEffect (() => {
   if(query.length > 3) {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=horror,fantasy,children,humor,fiction,horror,action,romance,animation,adventure&query=${query}')
    .then(response => {
      if(response.status === 200) {
        setBooks(response.data.results)
      }
    })
   }

  },[query]
     )

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/" style={{ fontSize: '1.5rem', fontWeight: 'normal', color: 'darkred', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
          <div>
            <img src="https://chista.de/wp-content/uploads/2023/06/Hintergrund-removebg-preview.png" alt="Tien Shop Logo" width="50" height="50" className="d-inline-block align-top brand-logo" />
          </div>
          <div>
            <span>TIEN SHOP</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-10 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/" style={{ color: 'darkred', fontWeight: 'light', margin: '17px' }}>Home</Nav.Link>
            <Nav.Link href="/bestsellers" style={{ color: 'darkred', fontWeight: 'light', margin: '17px' }}>Bestsellers</Nav.Link>
            <Nav.Link href="/books" style={{ color: 'darkred', fontWeight: 'light', margin: '17px' }}>Books</Nav.Link>
            <Nav.Link href="/favourites" style={{ color: 'darkred', fontWeight: 'light', margin: '17px' }}>Favourites</Nav.Link>
            <Nav.Link href="/cart" style={{ color: 'darkred', fontWeight: 'light', margin: '17px' }}>Cart(0)</Nav.Link>
            <NavDropdown title="Genres" id="navbarScrollingDropdown" style={{ color: 'darkred', fontWeight: 'light', margin: '17px' }}>
              {loadingGenres ? (
                <NavDropdown.Item>Loading...</NavDropdown.Item>
              ) : (
                genres.map(genre => (
                  <NavDropdown.Item
                    key={genre}
                    as={Link}
                    to={`/${genre.toLowerCase()}`} 
                    style={{ color: 'darkred', fontWeight: 'light' }}
                  >
                    {genre.charAt(0).toUpperCase() + genre.slice(1)}
                  </NavDropdown.Item>
                ))
              )}
            </NavDropdown>
            <NavDropdown title="Guest" style={{ color: 'darkred', fontWeight: 'light', margin: '17px' }}>
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="# ">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="dark" style={{ width: '80px', '&:hover': { backgroundColor: 'darkred' } }}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
