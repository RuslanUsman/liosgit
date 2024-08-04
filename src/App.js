import React, { useState } from 'react';
import ExplosiveSelection from './components/ExplosiveSelection';
import './App.css'; // Подключите стили

export const tg = window.Telegram.WebApp;


function App() {
  const [step, setStep] = useState(1);

  const getHeaderText = () => {
    switch (step) {
      case 1:
        return "Выберите тип взрывчатки";
      case 2:
        return "Выберите материал постройки";
      case 3:
        return "Выберите тип постройки и количество";
      case 4:
        return "Результат";
      default:
        return "Выберите тип взрывчатки";
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{getHeaderText()}</h1>
      </header>
      <div className="App-content">
        <ExplosiveSelection setStep={setStep} />
      </div>
    </div>
  );
}

export default App;
