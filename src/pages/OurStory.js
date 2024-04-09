import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component
import About from "../components/About"; // Import the About component
import Newsletter from "../components/Newsletter"; // Import the Newsletter component
import HeroAbout from "../components/HeroAbout"; // Import the HeroAbout component

const OurStory = () => {
  // This component represents the Our Story page of the website

  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <HeroAbout /> {/* Render the HeroAbout component */}
      <About /> {/* Render the About component */}
      <Newsletter /> {/* Render the Newsletter component */}
      <Footer /> {/* Render the Footer component */}
    </>
  );
};

export default OurStory;