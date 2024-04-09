// import React from 'react';
import StarRating from './StarRating';
import React, { useState } from 'react';
import './details.css';
import { Link } from "react-router-dom";
import review1 from './images/IMG_7183.jpg';
import fatcake1 from './images/IMG_7192.jpg';
import fatcake2 from './images/IMG_7193.jpg';
import fatcake3 from './images/IMG_7194.jpg';
import fatcake4 from './images/IMG_7195.jpg';
import fatcake5 from './images/IMG_7196.jpg';
import fatcake6 from './images/IMG_7197.jpg';
import review2 from './images/IMG_7205.jpg';
import review3 from './images/IMG_7215.jpg';
import clock from './images/orange-alarm.jpg';
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component



const FatCakeDetails = () => {


  const [isHeartRed, setHeartRed] = useState(false);


  const toggleHeartColormain = () => {
    setHeartRed(!isHeartRed);
  };


  const toggleHeartColor = (index) => {
    setRelatedRecipes(prevRecipes => {
      const newRecipes = [...prevRecipes];
      newRecipes[index].heart = !newRecipes[index].heart;
      return newRecipes;
    });
  };

  const stepListRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add the 'animate' class to the steps when the '.step-list' element is in the viewport
        if (entry.isIntersecting) {
          stepListRef.current.querySelectorAll('.step').forEach(step => {
            step.classList.add('animate');
          });
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (stepListRef.current) {
      observer.observe(stepListRef.current);
    }

    // Clean up the observer when the component is unmounted
    return () => observer.disconnect();
  }, []);



  const reviews = [
    { photo: "https://media.licdn.com/dms/image/D4D03AQFFSjhCp4Irkg/profile-displayphoto-shrink_800_800/0/1695803206756?e=2147483647&v=beta&t=IEDW82asB2-SAlwUaoRZFNjUfSriu7MbTaHoWwOwvxs", name: "Rethabile Mohapi", date: "3 days ago", stars: "★★★★☆", message: "Easy qick and nice love it" },
    { photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYyikPIGNM3wrZYtuFqo6EKv-F43_GwMo4JACDAFnAw&s", name: "Aeden Manel", date: "3 weeks ago", stars: "★★★☆☆", message: "Quick and profound methods " },
    { photo: "https://qph.cf2.quoracdn.net/main-thumb-95365177-200-bfdsjlwwtyodwczdbweikjhtorkkvmpp.jpeg", name: "Larreth Jimu", date: "1 Month ago", stars: "★★★★☆", message: "The Methods are easy to follow and quick " },
    { photo: "https://www.larrethgroup.com/wp-content/uploads/2022/06/1-150x150.png", name: "Mnelisi ", date: "3 Months ago ", stars: "★★★★☆", message: "I was hungry and I had all the ingredients , I made voetkoek and mince " },
  ];


  const [relatedRecipes, setRelatedRecipes] = useState([
    { image: fatcake6, name: 'Mince Meat', stars: 4, viewers: 100, heart: false },
    { image: review1, name: 'Chicken Feet', stars: 3, viewers: 200, heart: false },
    { image: review2, name: 'Creamy Stamp', stars: 5, viewers: 150, heart: <i className="fas fa-heart"></i> },
    {
      image: review3, name: 'Morogo(spinach', stars: 4, viewers: 120, heart: <i className="fas fa-heart"></i>, link: <Link to="/morogodetails"><img src={review3} alt='Morogo(spinach' /></Link>
    },


  ]);

  return (
    <div className='body'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

      <Navbar /> {/* Render the Navbar component */}
      <div className='recipe-body'></div>
      <div className="product-title">Easy vetkoek – South African goodness at its best</div>

      <div className='stars'>
        <StarRating rating={4} />
        <p> 4 (99 reviews)</p>
      </div>

      <div className='icons'>
        <i className="fas fa-share-alt"> Share</i>
        <i className={`fas fa-heart ${isHeartRed ? 'red' : ''}`}
          onClick={toggleHeartColormain}
        > Save</i>
      </div>

      <div className='image-grid'>
        <img src={fatcake1} alt='big' className='big-image' />
        <img src={fatcake2} alt='small-1' className='small-image' />
        <img src={fatcake3} alt='small-2' className='small-image' />
        <img src={fatcake4} alt='small-3' className='small-image' />
        <img src={fatcake5} alt='small-4' className='small-image' />
      </div>
      <br></br>
      <div className='headings'>
        DESCRIPTION
      </div>
      <p className='descriptionsP'>Vetkoek is a traditional South African snack that can be made with both sweet or savoury fillings. <br></br>Bite through the crispy exterior of a freshly baked vetkoek into the soft goodness inside. <br></br>This is something every South African can identify with. This easy vetkoek recipe is simple to prepare and delicious.</p>

      {/* <br></br> */}
      <div className='headings'> INGREDIENTS</div>
      <br></br>
      <ul class="ingredients-list">
        <li><i class="fas fa-check-double"></i> 7 cups all-purpose flour</li>
        <li><i class="fas fa-check-double"></i> 2 cups lukewarm water</li>
        <li><i class="fas fa-check-double"></i> ¼ cup white sugar</li>
        <li><i class="fas fa-check-double"></i> 1 packet active dry yeast</li>
        <li><i class="fas fa-check-double"></i> 2 teaspoons salt</li>
        <li><i class="fas fa-check-double"></i> oil for frying</li>
      </ul>
      <br></br>
      <hr className="hr" />
      <br></br>
      <div className='headings'> METHODS </div>
      <br></br>
      <ol class="step-list" ref={stepListRef}>
        <li class="step">Step 1: In a bowl, mix lukewarm water, sugar and yeast until combined. Let the mixture stand for about 7 minutes.</li>
        <li class="step">Step 2: Add the flour and salt into the bowl and knead the dough for 10 minutes until smooth. Cover the bowl and set aside for an hour, or until double in size.</li>
        <li class="step">Step 3: Preheat oil on the stove over medium heat until hot. Take a handful of the dough and roll into palm size cakes.</li>
        <li class="step">Step 4: Fry the dough in the hot oil until golden brown and cooked through – it takes about 3 minutes per side.</li>
        <li class="step">Step 5: Drain on paper towel to get rid of excess oil.</li>
        <li class="step">Step 6: Cut a hole and fill with savoury mince or eat plain.</li>
      </ol>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <hr className="hr" />
      <br></br>
      <div className='headings'> REVIEWS  </div>
      <div className='starsrev'>★ (99 review) </div>
      {/* <div>see more </div> */}
      <br></br>
      <br></br>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <div className="review-header">
              <img src={review.photo} alt={review.name} className="review-photo" />
              <div className="review-info">
                <div className="review-name">{review.name}</div>
                <div className="review-date">{review.date}</div>
                <div className="review-stars">{review.stars}</div>
              </div>
            </div>
            <div className="review-message">{review.message}</div>
          </div>
        ))}
      </div>
      <br></br>
      <hr className="hr" />
      <br></br>
      <div className='headings'>RELATED RECIPES </div>
      <br></br>
      <br></br>
      <div className="related-recipes">
        {relatedRecipes.map((recipe, index) => (
          <div key={index} className="recipe">

            <div className="recipe-name">{recipe.name}</div>

            <Link to="/morogodetails">
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            </Link>

            <div className="recipe-info">
              <i className={`fas fa-heart ${recipe.heart ? 'red' : ''}`} onClick={() => toggleHeartColor(index)} />
              <div className='starsreview'><StarRating rating={recipe.stars} /></div>
              <div className="recipe-viewers">{recipe.viewers} viewers</div>

            </div>
          </div>
        ))}
      </div>

      <hr className="hr" />
      <br></br>
      <br></br>
      <div className="subscribe">
        <p>LEAVE A REVIEW </p>
        <input placeholder="Your review" className="subscribe-input" name="text" type="text" />
        <br />
        <div className="submit-btn">SUBMIT</div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="image-container">
        <img src={clock} alt='clock' className='clock' />
        <p>45 min</p>
      </div>



      <Footer /> {/* Render the Footer component */}

    </div>
  );
}

export default FatCakeDetails;