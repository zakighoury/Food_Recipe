import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './StarRating.scss';

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<StarIcon key={i} />);
    } else if (i - rating <= 0.5) {
      stars.push(<StarHalfIcon key={i} />);
    } else {
      stars.push(<StarBorderIcon key={i} />);
    }
  }
  
  return (
    <div className="star-rating">
      {stars}
    </div>
  );
};

export default StarRating;
