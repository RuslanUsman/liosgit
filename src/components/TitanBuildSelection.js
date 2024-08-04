import React, { useState } from 'react';
import './TitanBuildSelection.css';

const titanBuildTypes = [
  { name: "Дверь", imagePath: "/images/doortitanium.png" },
  { name: "Стена", imagePath: "/images/titanium.png" },
  { name: "Фундамент", imagePath: "/images/basetitanium.png" },
  { name: "Складная лестница", imagePath: "/images/laddertitanium.png" },
  { name: "Решётка", imagePath: "/images/grilltitanium.png" }
];

const TitanBuildSelection = ({ onSelectBuildType }) => {
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
    <div className="titan-build-selection">
      <div className="titan-build-grid-wrapper">
        <div className="titan-build-grid">
          {titanBuildTypes.map(({ name, imagePath }) => (
            <div
              key={name}
              className={`titan-build-card ${selectedBuild === name ? 'selected' : ''}`}
              onClick={() => handleSelectBuild(name)}
            >
              <img src={`${process.env.PUBLIC_URL}${imagePath}`} alt={name} className="titan-build-image" />
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

export default TitanBuildSelection;