import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the TV Show App</h1>
      <Link to="/show/1">
        <button>Show More</button>
      </Link>
    </div>
  );
};

export default HomePage;
