// import React from 'react';
import StarRating from './StarRating';
import React, { useState } from 'react';
import './details.css';
import review1 from './images/IMG_7192.jpg';
import skopo1 from './images/IMG_7219.jpg';
import skopo2 from './images/IMG_7222.jpg';
import skopo3 from './images/IMG_7223.jpg';
import skopo4 from './images/IMG_7217.jpg';
import skopo5 from './images/IMG_7220.jpg';
import review0 from './images/IMG_7201.jpg';
import review2 from './images/IMG_7187.jpg';
import review3 from './images/IMG_7215.jpg';
import clock from './images/orange-alarm.jpg';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component



const SkopoCowHeadDetails = () => {
    

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
        { photo: "https://media.licdn.com/dms/image/D4D03AQFFSjhCp4Irkg/profile-displayphoto-shrink_800_800/0/1695803206756?e=2147483647&v=beta&t=IEDW82asB2-SAlwUaoRZFNjUfSriu7MbTaHoWwOwvxs", name: "Peter Johnny", date: "1 hr ago", stars: "★★★★★", message: "Tender skopo pieces simmered with hearty vegetables in a flavorful broth, offering a comforting and wholesome meal.Love the Recipe" },
        { photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYyikPIGNM3wrZYtuFqo6EKv-F43_GwMo4JACDAFnAw&s", name: "Christopher Monedi", date: "3 hours ago", stars: "★★★☆☆", message: "A comforting dish that celebrates tradition.My guests enjoyed this thank you for the recipe " },
        { photo: "https://qph.cf2.quoracdn.net/main-thumb-95365177-200-bfdsjlwwtyodwczdbweikjhtorkkvmpp.jpeg", name: "Mpho Down", date: "2 Month ago", stars: "★★★★☆", message: " delivers a smoky flavor and tender texture, I love this " },
        { photo: "https://www.larrethgroup.com/wp-content/uploads/2022/06/1-150x150.png", name: "Wizzy Pride  ", date: "3 Months ago ", stars: "★★★☆☆", message: " Tender cow head meat, cooked to perfection in a flavorful broth with vegetables and spices, quicky and easy steps  " },
      ];
    
      
      const [relatedRecipes, setRelatedRecipes] = useState([
        {image: review0, name: 'Mogodu', stars:4 ,viewers: 200, heart: <i className="fas fa-heart"></i> },    
        { image: review1, name: 'Voekoek', stars: 4, viewers: 500, heart: <i className="fas fa-heart"></i>,link: <Link to="/fatcakedetails"><img src={review2} alt='fatcakedetails' /></Link> },
        { image: review2, name: 'Chicken Feet', stars: 5, viewers: 450, heart: <i className="fas fa-heart"></i> },
        { image: review3, name: 'Morogo(spinach', stars: 5, viewers: 170, heart: <i className="fas fa-heart"></i> },
       
      ]);
    
  return (
    <div className='body'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />


    <Navbar /> {/* Render the Navbar component */}

            <div className="product-title">Skopo(Cow head)</div>   
            
            <div className='stars'>
                <StarRating rating={5} />
                <p> 5 (330 reviews)</p>
                </div>   
                       
    <div className='icons'>
        <i className="fas fa-share-alt"> Share</i>
        <i className={`fas fa-heart ${isHeartRed ? 'red' : ''}`} 
          onClick={toggleHeartColormain}
        > Save</i>
      </div>

      <div className='image-grid'>
                <img src={skopo1} alt='big' className='big-image' />
            <img src={skopo2} alt='small-1' className='small-image' />
            <img src={skopo3} alt='small-2' className='small-image' />
            <img src={skopo4} alt='small-3' className='small-image' />
            <img src={skopo5} alt='small-4' className='small-image' />
            </div>
            <br></br>
            <div className='headings'>
           DESCRIPTION
           </div>
            <p className='descriptionsP'>Skopo, otherwise known as “Smiley” is a classic South African delicacy. The meal consisting of a <br></br> sheep head gained notoriety amongst Zulu taxi drivers and is now found at every taxi rank or  <br></br>township corner throughout South Africa. <br></br>Getting fall-off-the-bone tender Skopo with rich, meaty flavour takes careful preparation.

</p>
           
            {/* <br></br> */}
        <div className='headings'> INGREDIENTS</div>
        <br></br>
            <ul class="ingredients-list">
            <li><i class="fas fa-check-double"></i> Sheep head</li>
            <li><i class="fas fa-check-double"></i> 2 onions</li>
            <li><i class="fas fa-check-double"></i>2 chilli beef cubes</li>
            <li><i class="fas fa-check-double"></i> Boiling water</li>
            <li><i class="fas fa-check-double"></i> Brown onion soup</li>
            <li><i class="fas fa-check-double"></i>Olive Oil</li>
            <li><i class="fas fa-check-double"></i> Barbecue spice</li>
            <li><i class="fas fa-check-double"></i>Steak & Chops spice</li>

          

            </ul>
            <br></br>
            <hr className="hr" />
            <br></br>
            <div className='headings'> METHODS </div>
            <br></br>
            <ol class="step-list" ref={stepListRef}>
            <li class="step">Step 1: Chop the onions into smaller pieces</li>
            <li class="step">Step 2: Add boiling water to large pot</li>
            <li class="step">Step 3: Add the Skopo to the large pot of boiling water</li>
            <li class="step">Step 4: Add the chopped onion pieces</li>
            <li class="step">Step 5: Boil for 30 minutes before adding the chilli beef stock</li>
            <li class="step">Step 6:Boil for another hour or so and add brown onion soup to create a sauce for your skopo</li>
            <li class="step">Step 7: Continue cooking the meal while stirring for an hour and a half or 2 hours (Depends on how soft your want the meat to be)</li>
            <li class="step">Step 8:  Once satisfied with the texture of your meat you can switch off the stove and let it simmer </li>
            <li class="step">Step 9: Remove your Skopo from the chilli beef broth and place in an oven pan.</li>
            <li class="step">Step 10:  Add your favourite spices but we suggest barbecue spice and steak and chops.</li>
            <li class="step">Step 11:  Add a little olive oil and place in the oven for 15 minutes.</li>
            <li class="step">Step 12:  When the Skopo is golden brown and the smell can’t be ignored, then you know it’s ready.</li>

            </ol>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <hr className="hr" />
            <br></br>
            <div className='headings'> REVIEWS  </div>  
            <div className='starsrev'>★ (330 review) </div> 
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

                  <Link to="/fatcakedetails">
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
                            <img src={clock} alt='clock'  className='clock'/>
                            <p>4hrs min</p>
                            </div>

                            <Footer /> {/* Render the Footer component */}


 </div>
  );
}

export default SkopoCowHeadDetails ;