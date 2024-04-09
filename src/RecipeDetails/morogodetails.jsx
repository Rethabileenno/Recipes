// import React from 'react';
import StarRating from './StarRating';
import React, { useState } from 'react';
import './details.css';
import { Link } from "react-router-dom";
import review1 from './images/IMG_7183.jpg';
import morogo1 from './images/IMG_7212.jpg';
import morogo2 from './images/IMG_7213.jpg';
import morogo3 from './images/IMG_7215.jpg';
import morogo4 from './images/IMG_7211.jpg';
import morogo5 from './images/IMG_7214.jpg';
import review0 from './images/IMG_7195.jpg';
import review2 from './images/IMG_7199.jpg';
import review3 from './images/IMG_7220.jpg';
import clock from './images/orange-alarm.jpg';
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component



const MorogoDetails = () => {
    

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
        { photo: "https://media.licdn.com/dms/image/D4D03AQFFSjhCp4Irkg/profile-displayphoto-shrink_800_800/0/1695803206756?e=2147483647&v=beta&t=IEDW82asB2-SAlwUaoRZFNjUfSriu7MbTaHoWwOwvxs", name: "Lilly K ", date: "5 days ago", stars: "★★★★★", message: " Quick, flavorful, and packed with vitamins, it's a wholesome meal option." },
        { photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYyikPIGNM3wrZYtuFqo6EKv-F43_GwMo4JACDAFnAw&s", name: "Jankie Rocky", date: "2 weeks ago", stars: "★★★★★", message: "Warm up with a comforting morogo soup infused with aromatic spice" },
        { photo: "https://qph.cf2.quoracdn.net/main-thumb-95365177-200-bfdsjlwwtyodwczdbweikjhtorkkvmpp.jpeg", name: "Janine Seattle", date: "1 Month ago", stars: "★★★★★", message: " Silky and rich, they're a perfect accompaniment to any meal. " },
        { photo: "https://www.larrethgroup.com/wp-content/uploads/2022/06/1-150x150.png", name: "Monde Sky  ", date: "3 Months ago ", stars: "★★★★★", message: "it's a hearty meal for any occasion. " },
      ];
    
      
      const [relatedRecipes, setRelatedRecipes] = useState([
        {image: review0, name: 'Fatcake', stars:4 ,viewers: 90, heart: false },    
        { image: review1, name: 'Chicken Feet', stars: 3, viewers: 1500, heart: false },
        { image: review2, name: 'Tribe', stars: 5, viewers: 180, heart: <i className="fas fa-heart"></i>, link: <Link to="/tribe"><img src={review2} alt='tribe' /></Link> },
        { image: review3, name: 'Skopo', stars: 5, viewers: 300, heart: <i className="fas fa-heart"></i> },
       
      ]);
    
  return (
    <div className='body'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

    <Navbar /> {/* Render the Navbar component */}

            <div className="product-title"> Morogo</div>   
            
            <div className='stars'>
                <StarRating rating={5} />
                <p> 4 (62 reviews)</p>
                </div>   
                       
    <div className='icons'>
        <i className="fas fa-share-alt"> Share</i>
        <i className={`fas fa-heart ${isHeartRed ? 'red' : ''}`} 
          onClick={toggleHeartColormain}
        > Save</i>
      </div>

      <div className='image-grid'>
                <img src={morogo1} alt='big' className='big-image' />
            <img src={morogo2} alt='small-1' className='small-image' />
            <img src={morogo3} alt='small-2' className='small-image' />
            <img src={morogo4} alt='small-3' className='small-image' />
            <img src={morogo5} alt='small-4' className='small-image' />
            </div>
            <br></br>
            <div className='headings'>
           DESCRIPTION
           </div>
            <p className='descriptionsP'>Morogo will always be my favourite thing to eat.<br></br> Preparing the leaves simply with potatoes and onions allows the fresh earthiness of the greens to shine,<br></br> giving you a satisfying plate of vegetables to eat alone or next to some steamy hot pap. <br></br> Use spinach or kale if you can’t get your hands on sweet potato leaves.</p>
           
            {/* <br></br> */}
        <div className='headings'> INGREDIENTS</div>
        <br></br>
            <ul class="ingredients-list">
            <li><i class="fas fa-check-double"></i>4 T oil</li>
            <li><i class="fas fa-check-double"></i>1 onion, roughly chopped</li>
            <li><i class="fas fa-check-double"></i> 1 onion(s) , chopped</li>
            <li><i class="fas fa-check-double"></i> 2 garlic cloves, finely chopped</li>
            <li><i class="fas fa-check-double"></i> 400 g sweet potato leaves, thinly sliced</li>
            <li><i class="fas fa-check-double"></i> 2 large Potatoes, diced</li>
            <li><i class="fas fa-check-double"></i>sea salt and freshly ground black pepper, to taste</li>
            
            </ul>
            <br></br>
            <hr className="hr" />
            <br></br>
            <div className='headings'> METHODS </div>
            <br></br>
            <ol class="step-list" ref={stepListRef}>
            <li class="step">Step 1: Heat the oil in a pan.</li>
            <li class="step">Step 2: Fry the onion over a medium heat until soft and translucent,5 minutes.</li>
            <li class="step">Step 3: Stir in the garlic and fry for 5 minutes</li>
            <li class="step">Step 4: Add the sweet potato leaves and gently fry, stirring often</li>
            <li class="step">Step 5: Once the greens have softened, add the potatoes, salt and pepper.</li>
            <li class="step">Step 6:Cook until the potatoes have softened. Serve hot.</li>
            </ol>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <hr className="hr" />
            <br></br>
            <div className='headings'> REVIEWS  </div>  
            <div className='starsrev'>★ (62 review) </div> 
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

                    <Link to="/tribe">
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
                            <p>15min</p>
                            </div>
                            <Footer /> {/* Render the Footer component */}
 </div>
  );
}

export default MorogoDetails;