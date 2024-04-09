import './styles/HeroContact-style.css';
import backgroundVideo from '../assets/bgvideo1.mp4';

const HeroContact = () => {
  return (
      <div className="heroDiv">
          <video autoPlay muted loop>
              <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="overlay"></div>
          <div className="content">
              <div  id='heroText'>
                  <h1 className="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-4" id='hero-contact'>How can we help you?</h1>
                  <p className="text-lg mb-9" id='hero-contact-p'>Please feel free to reach out to us using the contact form below.</p>
              </div>
          </div>
      </div>
  );
}

export default HeroContact;