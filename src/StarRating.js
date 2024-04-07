import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5].map((star) => {
    return (
      <span key={star}>
        {rating >= star ? (
          <i className="fas fa-star"></i>
        ) : rating >= star - 0.5 ? (
          <i className="fas fa-star-half-alt"></i>
        ) : (
          <i className="far fa-star"></i>
        )}
      </span>
    );
  });

  return <div>{stars}</div>;
};

export default StarRating;