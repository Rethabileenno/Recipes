import Footer from "../components/Footer"; // Import the Footer component
import HeroReviews from "../components/HeroReviews"; // Import the HeroReviews component
import LeaveReviewForm from "../components/LeaveReviewForm"; // Import the LeaveReviewForm component
import Navbar from "../components/Navbar"; // Import the Navbar component
import OurReviews from "../components/OurReviews"; // Import the OurReviews component

const Reviews = () => {
  // This component represents the Reviews page of the website

  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <HeroReviews /> {/* Render the HeroReviews component */}
      <OurReviews /> {/* Render the OurReviews component */}
      <LeaveReviewForm /> {/* Render the LeaveReviewForm component */}
      <Footer /> {/* Render the Footer component */}
    </>
  );
};

export default Reviews;