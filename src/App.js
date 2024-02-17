import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Book from './pages/Book';
import Bestsellers from './pages/Bestsellers';
import Favourites from './pages/Favourites';
import Genres from './pages/Genres';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Books from './pages/Books';
import Register from './pages/Register';
import Dashboard from './pages/dashboard'; // Make sure the file name matches
import Horror from './pages/Horror';
import Fantasy from './pages/Fantasy';
import Children from './pages/Children';
import Humor from './pages/Humor';
import Fiction from './pages/Fiction';
import Action from './pages/Action';
import Romance from './pages/Romance';
import Animation from './pages/Animation';

// Configure Axios to use Axios Retry with exponential backoff
axiosRetry(axios, { retries: 5, retryDelay: axiosRetry.exponentialDelay });

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id/details" element={<Book />} />
        <Route path="/bestsellers" element={<Bestsellers />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/horror" element={<Horror />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/children" element={<Children />} />
        <Route path="/humor" element={<Humor />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path="/action" element={<Action />} />
        <Route path="/romance" element={<Romance />} />
        <Route path="/animation" element={<Animation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
