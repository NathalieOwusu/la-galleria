import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home-container">
          <h1 className="home-title">Welcome to La Galleria</h1>
          <div className="home-links">
            <Link to="/login" className="home-link login-link">
              Login
            </Link>
            <Link to="/signup" className="home-link signup-link">
              Sign Up
            </Link>
          </div>
        </div>
      );
};

export default HomePage;
