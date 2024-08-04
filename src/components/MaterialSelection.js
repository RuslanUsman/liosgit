import React, { useState } from 'react';
import './MaterialSelection.css';

const materials = [
  { name: "Дерево", imagePath: "/images/wood.jpg" },
  { name: "Камень", imagePath: "/images/stone.jpg" },
  { name: "Металл", imagePath: "/images/metall.png" },
  { name: "Отличное железо", imagePath: "/images/steal.png" },
  { name: "Титан", imagePath: "/images/titanium.png" },
  { name: "Объекты", imagePath: "/images/object.png" }
];

const MaterialSelection = ({ onSelectMaterial }) => {
    const [selectedMaterial, setSelectedMaterial] = useState(null);
  
    const handleSelectMaterial = (name) => {
      setSelectedMaterial(name);
      onSelectMaterial(name);
    };
  
    return (
      <div className="material-grid-wrapper">
        <div className="material-grid">
          {materials.map(({ name, imagePath }) => (
            <div
              key={name}
              className={`material-card ${selectedMaterial === name ? 'selected' : ''}`}
              onClick={() => handleSelectMaterial(name)}
            >
              <img src={`${process.env.PUBLIC_URL}${imagePath}`} alt={name} className="material-image" />
              <h3>{name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MaterialSelection;