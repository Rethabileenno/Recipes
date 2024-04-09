import React from "react";
import "./styles/navbar-style.css"; // Import the CSS file for the Navbar component
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import logoImage from "../assets/Logo.jpeg"; // Import the logo image

const Navbar = () => {
  // This component represents the Navbar of the website

  return (
    <div className="Navigation">
      <nav className="flex align-center">
        <div>
          <img src={logoImage} alt="Logo" className="logo" />
        </div>
        <ul>
          <li className="big-screens">
            {/* Render the navigation links for large screens */}
            <Link to="/">Home</Link>
            <Link to="/ourrecipes">Our Recipes</Link>
            <Link to="/ourstory">Our Story</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/contact" id="contact-btn">
              Contact
            </Link>
          </li>
          <li className="small-screens">
            {/* Render the hamburger menu icon for small screens */}
            <i className="fa-solid fa-bars"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;