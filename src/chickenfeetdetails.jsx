// import React from 'react';
import StarRating from './StarRating';
import React, { useState } from 'react';
import './App.css';
import review1 from './images/IMG_7222.jpg';
import chick1 from './images/IMG_7187.jpg';
import chick2 from './images/IMG_7183.jpg';
import chick3 from './images/IMG_7185.jpg';
import chick4 from './images/IMG_7210.jpg';
import chick5 from './images/IMG_7188.jpg';
import review0 from './images/IMG_7201.jpg';
import review2 from './images/IMG_7205.jpg';
import review3 from './images/IMG_7215.jpg';
import clock from './images/orange-alarm.jpg';
import { Link } from "react-router-dom";




const ChickenFeetDetails = () => {
    

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
        { photo: "https://media.licdn.com/dms/image/D4D03AQFFSjhCp4Irkg/profile-displayphoto-shrink_800_800/0/1695803206756?e=2147483647&v=beta&t=IEDW82asB2-SAlwUaoRZFNjUfSriu7MbTaHoWwOwvxs", name: "Malebogo Kue", date: "1 days ago", stars: "★★★★★", message: "Tender chicken feet simmered in a fiery chili sauce, offering a flavorful kick with each bite., really enjoyed" },
        { photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYyikPIGNM3wrZYtuFqo6EKv-F43_GwMo4JACDAFnAw&s", name: "Sabata Tina", date: "2 weeks ago", stars: "★★★☆☆", message: "Crisp and golden, these fried chicken feet boast a satisfying crunch with succulent meat inside." },
        { photo: "https://qph.cf2.quoracdn.net/main-thumb-95365177-200-bfdsjlwwtyodwczdbweikjhtorkkvmpp.jpeg", name: "Mercia Leaf", date: "2 Month ago", stars: "★★★★☆", message: "A comforting broth filled with tender chicken feet, infused with aromatic ginger and fragrant herbs" },
        { photo: "https://www.larrethgroup.com/wp-content/uploads/2022/06/1-150x150.png", name: "Hazel Wizzy ", date: "3 Months ago ", stars: "★★★☆☆", message: " Served cold, these marinated chicken feet are a tangy and savory delight, perfect for appetizers or snacks, try it  " },
      ];
    
      
      const [relatedRecipes, setRelatedRecipes] = useState([
        {image: review0, name: 'Mogodu', stars:4 ,viewers: 200, heart: <i className="fas fa-heart"></i> },    
        { image: review1, name: 'Skopo', stars: 3, viewers: 500, heart: <i className="fas fa-heart"></i> },
        { image: review2, name: 'Creamy Stamp', stars: 5, viewers: 150, heart: <i className="fas fa-heart"></i> },
        { image: review3, name: 'Morogo(spinach', stars: 4, viewers: 120, heart: <i className="fas fa-heart"></i> },
       
      ]);
    
  return (
    <div className='body'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />


<div className="Navigation">
      <nav class="flex align-center">
        <div><img src={"https://github.com/Aeden-Manell/Recipe-Book-Website/blob/main/src/assets/Logo.jpeg?raw=true"} alt="Logo" className="logo" /></div>
        <ul>
          <li class="big-screens">

            <Link to="/">Home</Link>
            <Link to="/ourstory">Our Story</Link>
            <Link to="/ourrecipes">Our Recipes</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/contact" id="contact-btn">Contact</Link>
          </li>
          <li class="small-screens">
            <i class="fa-solid fa-bars"></i>
          </li>
        </ul>
      </nav>
    </div>

            <div className="product-title">Chicken Feet</div>   
            
            <div className='stars'>
                <StarRating rating={4} />
                <p> 4 (156 reviews)</p>
                </div>   
                       
    <div className='icons'>
        <i className="fas fa-share-alt"> Share</i>
        <i className={`fas fa-heart ${isHeartRed ? 'red' : ''}`} 
          onClick={toggleHeartColormain}
        > Save</i>
      </div>

      <div className='image-grid'>
                <img src={chick1} alt='big' className='big-image' />
            <img src={chick2} alt='small-1' className='small-image' />
            <img src={chick3} alt='small-2' className='small-image' />
            <img src={chick4} alt='small-3' className='small-image' />
            <img src={chick5} alt='small-4' className='small-image' />
            </div>
            <br></br>
            <div className='headings'>
           DESCRIPTION
           </div>
            <p className='descriptionsP'>Chicken feet, a popular delicacy in many Asian and African cultures, are more than just a novelty;?<br></br> they are an explosion of textures and flavours that will surprise and delight your senses. Get ready <br></br> to elevate your dining experience with a dish that might sound unusual at first, but will <br></br>undoubtedly leave you craving for more – this delightful chicken feet recipe!

</p>
           
            {/* <br></br> */}
        <div className='headings'> INGREDIENTS</div>
        <br></br>
            <ul class="ingredients-list">
            <li><i class="fas fa-check-double"></i> 500 g Chicken feet cleaned</li>
            <li><i class="fas fa-check-double"></i> 1 tablespoon turmeric</li>
            <li><i class="fas fa-check-double"></i>2 tablespoon paprikal</li>
            <li><i class="fas fa-check-double"></i> 1 tablespoon crushed garlic</li>
            <li><i class="fas fa-check-double"></i> 1 tablespoon Worcestershire sauce</li>
            <li><i class="fas fa-check-double"></i> 1 tablespoon tomato paste</li>
            <li><i class="fas fa-check-double"></i> 1 tablespoon all in one curry powder with garlic</li>
            <li><i class="fas fa-check-double"></i> ½ chopped onion</li>
            <li><i class="fas fa-check-double"></i> 2 bay leaves</li>
            <li><i class="fas fa-check-double"></i> Optional: sugar to taste</li>
          

            </ul>
            <br></br>
            <hr className="hr" />
            <br></br>
            <div className='headings'> METHODS </div>
            <br></br>
            <ol class="step-list" ref={stepListRef}>
            <li class="step">Step 1: After rinsing and cleaning the chicken feet, add the chicken feet into a pan and add a little water.</li>
            <li class="step">Step 2: Season with pink Himalayan salt and add the turmeric. Let the chicken feet simmer for 30 minutes with the lid on.</li>
            <li class="step">Step 3: After 30 minutes remove the chicken feet from the pan.</li>
            <li class="step">Step 4: In the same pan, add a little oil, allow to heat and add 1 tablespoon all in one curry powder with garlic and let it roast for about 1-2 minutes.</li>
            <li class="step">Step 5: Add ½ chopped red onion and sauté until translucent. Once fully cooked, add the cooked chicken feet back into the pan</li>
            <li class="step">Step 6:Add 1 tablespoon crushed garlic/garlic powder.</li>
            <li class="step">Step 7: Add 2 tablespoon paprika. and Add 1 tablespoon Worcestershire sauce.</li>
            <li class="step">Step 8:  Add some dry/fresh thyme. and Add some water into the pan again and mix. </li>
            <li class="step">Step 9: Add 1 tablespoon tomato paste.</li>
            <li class="step">Step 10:  Allow to simmer for 15 minutes with the lid on.</li>
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
            <div className='starsrev'>★ (156 review) </div> 
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

                    <img src={recipe.image} alt={recipe.name} className="recipe-image" />
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
                            <p>45 min</p>
                            </div>

{/* 
                            <footer id='footer-Div' class="bg-[#ff6f01] py-8 px-10 font-[sans-serif]">
      <div class="md:max-w-[50%] mx-auto text-center">
        <a href='javascript:void(0)' class="inline-block"> <img src={Image} alt="Logo" className="footerlogo" /> </a>
        <h1 className='logoText' >Mama's Traditional Mzansi Cuisine</h1>
        <p class="text-sm mt-8" id='footer-p'>We are a team of passionate foodies and storytellers dedicated to preserving and sharing the rich culinary heritage of our beloved Mzansi.
 </p>



      </div>
      
      <hr class=" my-8" id='hrFooter' />
      <div class="md:flex md:item-center">
        <ul class="flex flex-wrap gap-4">
          <li class="text-sm">
            <a  class=' font-semibold hover:underline' id='text'>Terms of Service</a>
          </li>
          <li class="text-sm">
            <a class='font-semibold hover:underline' id='text'>Privacy Policy</a>
          </li>
          <li class="text-sm">
            <a  class=' font-semibold hover:underline' id='text' >Security</a>
          </li>
        </ul>
        <p class='text-sm  ml-auto max-md:mt-4' id='copyright-text'>Copyright © 2024 Mama's Traditional Mzansi Cuisine.<a target='_blank' class="hover:underline mx-1">  </a></p>
      </div>
    </footer> */}


 </div>
  );
}

export default ChickenFeetDetails ;