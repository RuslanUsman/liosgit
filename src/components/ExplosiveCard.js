import React from 'react';
import './ExplosiveCard.css';

const ExplosiveCard = ({ name, imagePath, selected, onClick }) => {
  return (
    <div
      className={`explosive-card ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <img src={`${process.env.PUBLIC_URL}${imagePath}`} alt={name} className="explosive-image" />
      <h3>{name}</h3>
    </div>
  );
};

export default ExplosiveCard;