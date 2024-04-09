import React from "react";
import './styles/hero-style.css';
import backgroundVideo from '../assets/bgvideo1.mp4';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div className="hero-Div">
                <video autoPlay muted loop>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <div className="over-lay"></div>
                <div className="con-tent">
                    <div id='hero-Text'>
                        <h1 className="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-4" id='herocontact'>Welcome to Mama's Traditional Mzansi Cuisine</h1>
                        <p className="text-lg mb-9" id='herocontact-p'>Flavors of Tradition:<br></br> Let Every Bite Whisper a Story</p>
                        <div className="divBtn">
                                <Link to="/ourrecipes" className="button-hero">View All Recipes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;