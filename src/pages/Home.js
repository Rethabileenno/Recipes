import React from "react";
import "./styles/home.css"; // Import the CSS file for the Home page

import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component
import Hero from "../components/Hero"; // Import the Hero component
import Slider from "../components/Slider"; // Import the Slider component
import RecipeList from "../components/RecipeList"; // Import the RecipeList component
import HeadingText from "../components/HeadingText"; // Import the HeadingText component
import Newsletter from "../components/Newsletter"; // Import the Newsletter component

export default function Home() {
  // This component represents the Home page of the website

  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <Hero /> {/* Render the Hero component */}
      <Slider /> {/* Render the Slider component */}
      <HeadingText /> {/* Render the HeadingText component */}
      <RecipeList /> {/* Render the RecipeList component */}
      <Newsletter /> {/* Render the Newsletter component */}
      <Footer /> {/* Render the Footer component */}
    </>
  );
}