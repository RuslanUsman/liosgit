import React, { useState } from 'react';
import './ObjectBuildSelection.css';

// Список карточек для объекта
const objectBuildTypes = [
  { name: "Устройство отслеживания стрельбы", imagePath: "/images/toptyrel.png" },
  { name: "Установка с автоматической винтовкой", imagePath: "/images/middletyrel.png" },
  { name: "Автоматическая установка для картечи", imagePath: "/images/shottyrel.png" },
  { name: "Торговый бот", imagePath: "/images/shopbot.png" },
  { name: "Электромагнитная турель", imagePath: "/images/tesla.png" },
  { name: "Ракетная пусковая установка", imagePath: "/images/rockettyrel.png" }
];

const ObjectBuildSelection = ({ onSelectBuildType }) => {
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
    <div className="object-build-selection">
      <div className="object-build-grid-wrapper">
        <div className="object-build-grid">
          {objectBuildTypes.map(({ name, imagePath }) => (
            <div
              key={name}
              className={`object-build-card ${selectedBuild === name ? 'selected' : ''}`}
              onClick={() => handleSelectBuild(name)}
            >
              <img src={`${process.env.PUBLIC_URL}${imagePath}`} alt={name} className="object-build-image" />
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

export default ObjectBuildSelection;