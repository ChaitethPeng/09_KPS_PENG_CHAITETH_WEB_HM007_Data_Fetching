import React from 'react';

const StarRating = ({ rating }) => {

  const renderStars = () => {
    const Stars = Math.floor(rating); // Number of  stars
    const starIcons = [];

    for (let i = 0; i < Stars; i++) {
      starIcons.push(<img key={i} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1200px-Star_icon_stylized.svg.png"} alt="Star" style={{width: "20px", height: "20px"}} />);
    }
    return starIcons;
  };

  return (
    <div className="flex gap-1">
    {renderStars()}
  </div>
  );
};

export default StarRating;
