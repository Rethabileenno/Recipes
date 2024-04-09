import React from "react";
import "./styles/about-style.css"; // Import the CSS file for the About component

const About = () => {
  // This component represents the About page of the website

  return (
    <>
      <div className="about-div">
        <div className="text-center">
          <h2 className="h1-about">About Mama's Traditional Mzansi Cuisine</h2>
          <div className="p-text">
            <p className="text-about">
              With over a decade of experience, Mama's Traditional Mzansi
              Cuisine has become a trusted online platform for those seeking to
              explore the diverse flavors and traditional dishes of South Africa.
              Our website is a treasure trove of recipes that have been passed
              down through generations, capturing the essence of our country's
              vibrant food culture.
              <br></br><br></br>
              At Mama's Traditional Mzansi Cuisine, we believe that food is more
              than just sustenance; it is a reflection of our history,
              traditions, and the warmth of our communities. Each recipe on our
              website is carefully curated to ensure an authentic and delightful
              culinary experience for our visitors.
              <br></br><br></br>
              Our team of dedicated food enthusiasts and culinary experts work
              tirelessly to bring you the best of South African cuisine. From
              hearty stews and braai (barbecue) recipes to fragrant curries and
              indulgent desserts, we strive to showcase the incredible range of
              flavors and ingredients that make up our culinary tapestry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;