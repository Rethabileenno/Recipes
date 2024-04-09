// Import necessary React and React Router DOM libraries
import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import individual pages for the website
import Home from "./pages/Home";
import OurStory from './pages/OurStory';
import OurRecipes from './pages/OurRecipes';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

// Import specific recipe details pages
import Tribe from "./RecipeDetails/tribe";
import Skopo from "./RecipeDetails/skopocowheaddetails";
import FatCake from "./RecipeDetails/fatcakedetails";
import Samp from "./RecipeDetails/sampdetails";
import Chicken from "./RecipeDetails/chickenfeetdetails";
import Morogo from "./RecipeDetails/morogodetails";

// Main App component that handles routing
export default function App() {
  return (
    // Use BrowserRouter to enable routing
    <BrowserRouter>
      {/* Define the Routes and their corresponding paths */}
      <Routes>
        <Route path="/">
          {/* Define nested Routes for the main pages */}
          <Route index element={<Home />} />
          <Route path="ourstory" element={<OurStory />} />
          <Route path="ourrecipes" element={<OurRecipes />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>

        {/* Define nested Routes for the recipe details pages */}
        <Route path="tribe" element={<Tribe />} />
        <Route path="skopo" element={<Skopo />} />
        <Route path="fatcake" element={<FatCake />} />
        <Route path="samp" element={<Samp />} />
        <Route path="chicken" element={<Chicken />} />
        <Route path="morogo" element={<Morogo />} />
        
      </Routes>
    </BrowserRouter>
  );
}