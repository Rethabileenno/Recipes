import React from 'react';
import './styles/LeaveReviewForm-style.css'; // Import the CSS file for the LeaveReviewForm component

const LeaveReviewForm = () => {
  // This component represents the Leave Review form

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the form data
    const formData = new FormData(e.target);
    const rating = formData.get('rating');
    const opinion = formData.get('opinion');

    // Perform any necessary actions with the rating and opinion data
    // For example, send the data to an API or update the state in a parent component
    console.log('Rating:', rating);
    console.log('Opinion:', opinion);
  };

  return (
    <div className='wrapper-div'>
      <div className="wrapper">
        <h1 id='h3-wrapper'>Share Your <br></br>Feedback on our Recipes</h1>
        <p className='p-wrapper'>Your feedback helps us improve and create even more delicious dishes 
        for our community. Whether it's a rave review, a helpful suggestion, 
        or a constructive critique, please take a moment to share your thoughts below.
         We appreciate your contribution and look forward to reading your review!</p>
        <form onSubmit={handleSubmit}>
          <div className="rating">
            {/* Create a star rating input */}
            <input type="number" name="rating" hidden />
            {[0, 1, 2, 3, 4].map((i) => (
              <i key={i} className="bx bx-star star" style={{ '--i': i }}></i>
            ))}
          </div>
          <textarea name="opinion" cols="30" rows="6" placeholder="Your opinion..."></textarea>
          <div className="btn-group">
            <button type="submit" className="btn submit">Submit</button>
            <button className="btn cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveReviewForm;