// import React from 'react';
import StarRating from './StarRating';
import React, { useState } from 'react';
import './details.css';
import { Link } from "react-router-dom";
import review1 from './images/IMG_7183.jpg';
import samp1 from './images/IMG_7205.jpg';
import samp2 from './images/IMG_7206.jpg';
import samp3 from './images/IMG_7207.jpg';
import samp4 from './images/IMG_7208.jpg';
import samp5 from './images/IMG_7209.jpg';
import review0 from './images/IMG_7195.jpg';
import review2 from './images/IMG_7199.jpg';
import review3 from './images/IMG_7222.jpg';
import clock from './images/orange-alarm.jpg';
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer componen



const SampDetails = () => {
    

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
        { photo: "https://media.licdn.com/dms/image/D4D03AQFFSjhCp4Irkg/profile-displayphoto-shrink_800_800/0/1695803206756?e=2147483647&v=beta&t=IEDW82asB2-SAlwUaoRZFNjUfSriu7MbTaHoWwOwvxs", name: "Kitso Jack", date: "5 days ago", stars: "★★★★★", message: "Easy to prepare, it's a go-to for chilly evenings." },
        { photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYyikPIGNM3wrZYtuFqo6EKv-F43_GwMo4JACDAFnAw&s", name: "Sam Rocky", date: "2 weeks ago", stars: "★★★★★", message: "Velvety smooth and bursting with flavor, it elevates any pasta dish." },
        { photo: "https://qph.cf2.quoracdn.net/main-thumb-95365177-200-bfdsjlwwtyodwczdbweikjhtorkkvmpp.jpeg", name: "Jayesh Seattle", date: "1 Month ago", stars: "★★★★★", message: " Silky and rich, they're a perfect accompaniment to any meal. " },
        { photo: "https://www.larrethgroup.com/wp-content/uploads/2022/06/1-150x150.png", name: "Monde Sky  ", date: "3 Months ago ", stars: "★★★★★", message: "Creamy Stamp mashed potatoes offer a luxurious twist on a classic side " },
      ];
    
      
      const [relatedRecipes, setRelatedRecipes] = useState([
        {image: review0, name: 'Fatcake', stars:4 ,viewers: 90, heart: false },    
        { image: review1, name: 'Chicken Feet', stars: 3, viewers: 1500, heart: false },
        { image: review2, name: 'Tribe', stars: 5, viewers: 180, heart: <i className="fas fa-heart"></i> },
        { image: review3, name: 'Skopo(CowHead)', stars: 4, viewers: 120, heart: <i className="fas fa-heart"></i>,link: <Link to="/skopocowheaddetails"><img src={review2} alt='skopocowheaddetails' /></Link> },
       
      ]);
    
  return (
    <div className='body'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

   
    <Navbar /> {/* Render the Navbar component */}

            <div className="product-title">Creamy Samp</div>   
            
            <div className='stars'>
                <StarRating rating={5} />
                <p> 5 (70 reviews)</p>
                </div>   
                       
    <div className='icons'>
        <i className="fas fa-share-alt"> Share</i>
        <i className={`fas fa-heart ${isHeartRed ? 'red' : ''}`} 
          onClick={toggleHeartColormain}
        > Save</i>
      </div>

      <div className='image-grid'>
                <img src={samp1} alt='big' className='big-image' />
            <img src={samp2} alt='small-1' className='small-image' />
            <img src={samp3} alt='small-2' className='small-image' />
            <img src={samp4} alt='small-3' className='small-image' />
            <img src={samp5} alt='small-4' className='small-image' />
            </div>
            <br></br>
            <div className='headings'>
           DESCRIPTION
           </div>
            <p className='descriptionsP'>A traditional meal cherished by many South Africans,<br></br> this creamy samp recipe can be served with any meat of your choice, <br></br>whether it is beans, meat or gravy this samp will not disappoint.</p>
           
            {/* <br></br> */}
        <div className='headings'> INGREDIENTS</div>
        <br></br>
            <ul class="ingredients-list">
            <li><i class="fas fa-check-double"></i>800g cooking samp</li>
            <li><i class="fas fa-check-double"></i> 2 litre(s) water</li>
            <li><i class="fas fa-check-double"></i> 1 onion(s) , chopped</li>
            <li><i class="fas fa-check-double"></i> 60 ml margarine or butter</li>
            <li><i class="fas fa-check-double"></i> 5 ml Aromat</li>
            <li><i class="fas fa-check-double"></i> 45 ml Cremora</li>
            <li><i class="fas fa-check-double"></i>250ml Cream</li>
            <li><i class="fas fa-check-double"></i>100g Butter</li>
            <li><i class="fas fa-check-double"></i>45 ml fresh parsley , chopped</li>
            </ul>
            <br></br>
            <hr className="hr" />
            <br></br>
            <div className='headings'> METHODS </div>
            <br></br>
            <ol class="step-list" ref={stepListRef}>
            <li class="step">Step 1: Bring the samp and water to the boil</li>
            <li class="step">Step 2: Once boiling, lower the heat and simmer for 30 minutes or until soft. Drain off excess liquid if necessary.</li>
            <li class="step">Step 3: Fry the onion in the butter until just soft.</li>
            <li class="step">Step 4: Add to the samp together with the Aromat, Cremora, and cream..</li>
            <li class="step">Step 5: Simmer over low heat for 5 minutes.</li>
            <li class="step">Step 6:Add the parsley and mix through. Serve warm</li>
            </ol>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <hr className="hr" />
            <br></br>
            <div className='headings'> REVIEWS  </div>  
            <div className='starsrev'>★ (70 review) </div> 
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
                <Link to="/skopocowheaddetails">
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
                            <p>35 min</p>
                            </div>
                            <Footer /> {/* Render the Footer component */}
 </div>
  );
}

export default SampDetails;