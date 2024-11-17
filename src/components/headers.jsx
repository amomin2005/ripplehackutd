import React from 'react';
import { Link } from 'react-router-dom';
import "./headers.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Your Logo
        </Link>
        <nav className="nav-links">
          <Link to="/signup" className="nav-button">Sign Up</Link>
          <Link to="/login" className="nav-button">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;