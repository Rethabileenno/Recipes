import "./styles/list-style.css"
import clockicon from "../assets/icon8.png";
import { Link } from "react-router-dom";

import IMG1 from "../assets/IMG1.jpg";
import IMG2 from "../assets/IMG2.jpg";
import IMG3 from "../assets/IMG3.jpg";
import IMG4 from "../assets/IMG4.jpg";
import IMG5 from "../assets/IMG5.jpg";
import IMG6 from "../assets/IMG6.jpg";

const RecipeList = () => {
    return ( 
        <div className="productcard-div">
   <ul class="cards">
  <li>
    <div href="" class="card">
      <img src={IMG1} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={clockicon} alt="" />
          <div class="card__header-text">
            <h3 class="cardtitle">Chicken Feet Recipe</h3>            
            <span class="cardstatus">Duration: 50 Min</span><br></br>
            <span class="cardstatus">Servings: 4-5</span>
          </div>
        </div>
        <Link to="/chicken" class="cardbtn">View Recipe</Link>
      </div>
    </div>      
  </li>
  <li>
  <div href="" class="card">
      <img src={IMG2} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={clockicon} alt="" />
          <div class="card__header-text">
            <h3 class="cardtitle">Tripe (Mala Mogodu/Ulusu) Recipe</h3>            
            <span class="cardstatus">Duration: 2 Hours</span><br></br>
            <span class="cardstatus">Servings: 4-6</span>
          </div>
        </div>
        <Link to="/tribe" class="cardbtn">View Recipe</Link>
      </div>
      </div>         
  </li>
  <li>
  <div href="" class="card">
      <img src={IMG3} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={clockicon} alt="" />
          <div class="card__header-text">
            <h3 class="cardtitle">SKOPO (Cow Head) Recipe</h3>            
            <span class="cardstatus">Duration: 40 Min</span><br></br>
            <span class="cardstatus">Servings: 4-6</span>
          </div>
        </div>
        <Link to="/skopo" class="cardbtn">View Recipe</Link>
      </div>
      </div>      
  </li>
  <li>
  <div href="" class="card">
      <img src={IMG4} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={clockicon} alt="" />
          <div class="card__header-text">
            <h3 class="cardtitle">Morogo Recipe</h3>            
            <span class="cardstatus">Duration: 1 Hour</span><br></br>
            <span class="cardstatus">Servings: 4-6</span>
          </div>
        </div>
        <Link to="/morogo" class="cardbtn">View Recipe</Link>
      </div>
      </div>      
  </li>
  <li>
  <div href="" class="card">
      <img src={IMG5} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={clockicon} alt="" />
          <div class="card__header-text">
            <h3 class="cardtitle">Creamy Samp & Beans Recipe</h3>            
            <span class="cardstatus">Duration: 40 Min</span><br></br>
            <span class="cardstatus">Servings: 7-8</span>
          </div>
        </div>
        <Link to="/samp" class="cardbtn">View Recipe</Link>
      </div>
      </div>        
  </li>
  <li>
  <div href="" class="card">
      <img src={IMG6} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={clockicon} alt="" />
          <div class="card__header-text">
            <h3 class="cardtitle">Vetkoek Recipe</h3>            
            <span class="cardstatus">Duration: 40 Min</span><br></br>
            <span class="cardstatus">Servings: 5-6</span>
          </div>
        </div>
        <Link to="/fatcake" class="cardbtn">View Recipe</Link>
      </div>
    </div>      
  </li>   
</ul>
        </div>
     );
}
 
export default RecipeList;