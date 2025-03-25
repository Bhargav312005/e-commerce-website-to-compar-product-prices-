import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure the CSS file is imported

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">E-Shop</Link>
      <div className="nav-right">
        <Link to="/login" className="nav-btn">Login</Link>
        <Link to="/feedback" className="nav-btn">Feedback</Link>
      </div>
    </nav>
  );
};

export default Navbar;
