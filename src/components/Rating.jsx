import { useState } from 'react';

const Rating = ({ note }) => {
  const [filledStars] = useState(Math.floor(note));
  const remainingStars = 5 - filledStars;

  return (
    <div className="rating">
      {[...Array(filledStars)].map((_, i) => (
        <i key={i} className="fas fa-star" style={{ color: "#ff6060" }}></i>
      ))}
      {[...Array(remainingStars)].map((_, i) => (
        <i key={i + filledStars} className="far fa-star"></i>
      ))}
    </div>
  );
};

export default Rating;
