import ContactUs from "../components/ContactUs"; // Import the ContactUs component
import Navbar from "../components/Navbar"; // Import the Navbar component
import HeroContact from "../components/HeroContact"; // Import the HeroContact component
import Footer from "../components/Footer"; // Import the Footer component

const Contact = () => {
  // This component represents the Contact page of the website

  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <HeroContact /> {/* Render the HeroContact component */}
      <ContactUs /> {/* Render the ContactUs component */}
      <Footer /> {/* Render the Footer component */}
    </>
  );
};

export default Contact;