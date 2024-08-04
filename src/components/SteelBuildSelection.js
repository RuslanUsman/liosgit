import React, { useState } from 'react';
import './SteelBuildSelection.css';

const steelBuildTypes = [
  { name: "Дверь", imagePath: "/images/doorsteal.png" },
  { name: "Стена", imagePath: "/images/steal.png" },
  { name: "Фундамент", imagePath: "/images/basesteal.png" },
  { name: "Складная лестница", imagePath: "/images/laddersteal.png" },
  { name: "Решётка", imagePath: "/images/grillsteal.png" }
];

const SteelBuildSelection = ({ onSelectBuildType }) => {
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
    <div className="steel-build-selection">
      <div className="steel-build-grid-wrapper">
        <div className="steel-build-grid">
          {steelBuildTypes.map(({ name, imagePath }) => (
            <div
              key={name}
              className={`steel-build-card ${selectedBuild === name ? 'selected' : ''}`}
              onClick={() => handleSelectBuild(name)}
            >
              <img src={`${process.env.PUBLIC_URL}${imagePath}`} alt={name} className="steel-build-image" />
              <h3>{name}</h3>
              {selectedBuild === name && (
                <div className="quantity-controls">
                  <button onClick={(e) => {e.stopPropagation(); handleDecrease(name);}}>-</button>
                  <span>{quantity}</span>
                  <button onClick={(e) => {e.stopPropagation(); handleIncrease(name);}}>+</button>
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

export default SteelBuildSelection;