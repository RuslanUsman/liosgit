import React from 'react';

const TestComponent = () => {
  return (
    <div>
      <h1>Test Image</h1>
      <img src={`${process.env.PUBLIC_URL}/images/bb.png`} alt="Бобовка" style={{ width: '100px', height: 'auto' }} />
    </div>
  );
};

export default TestComponent;