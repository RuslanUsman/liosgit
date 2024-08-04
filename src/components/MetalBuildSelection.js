import React, { useState } from 'react';
import './MetalBuildSelection.css';

const metalBuildTypes = [
  { name: "Дверь", imagePath: "/images/doormetall.png" },
  { name: "Стена", imagePath: "/images/metall.png" },
  { name: "Фундамент", imagePath: "/images/basemetall.png" },
  { name: "Железная складная лестница", imagePath: "/images/laddermetall.png" },
  { name: "Железная решётка", imagePath: "/images/grillmetall.png" }
];

const MetalBuildSelection = ({ onSelectBuildType }) => {
  const [selectedBuild, setSelectedBuild] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleSelectBuild = (name) => {
    setSelectedBuild(name);
    setQuantity(1); // Сбросить количество при выборе нового типа
  };

  const handleIncrease = (name) => {
    if (selectedBuild === name) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const handleDecrease = (name) => {
    if (selectedBuild === name) {
      setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    }
  };

  const handleConfirmSelection = () => {
    if (selectedBuild) {
      onSelectBuildType(selectedBuild, quantity);
    }
  };

  return (
    <div className="metal-build-selection">
      <div className="metal-build-grid-wrapper">
        <div className="metal-build-grid">
          {metalBuildTypes.map(({ name, imagePath }) => (
            <div
              key={name}
              className={`metal-build-card ${selectedBuild === name ? 'selected' : ''}`}
              onClick={() => handleSelectBuild(name)}
            >
              <img src={`${process.env.PUBLIC_URL}${imagePath}`} alt={name} className="metal-build-image" />
              <h3>{name}</h3>
              {selectedBuild === name && (
                <div className="quantity-controls">
                  <button onClick={(e) => { e.stopPropagation(); handleDecrease(name); }}>-</button>
                  <span>{quantity}</span>
                  <button onClick={(e) => { e.stopPropagation(); handleIncrease(name); }}>+</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {selectedBuild && (
        <button className="confirm" onClick={handleConfirmSelection}>Подтвердить выбор</button>
      )}
    </div>
  );
};

export default MetalBuildSelection;