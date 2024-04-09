import React from "react";
import "./styles/HeroReviews-style.css"; // Import the CSS file for the HeroReviews component

const HeroReviews = () => {
  // This component represents the Hero section of the Reviews page

  return (
    <>
      <div id="hero-Recipe">
        <div className="font-sans  text-[#333] p-6">
          <div className="text-center max-w-2xl max-md:max-w-md mx-auto">
            <div>
              <p className=" mb-4" id="h-4">
                Discover the Delight of Shared Experiences
              </p>
              <h2 id="h1-recipe">Hear What Our Community Has to Say</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroReviews;