import React, { useState, useEffect } from "react";

const Counter = () => {
  const increaseCounter = async () => {
    setNewValue(parseInt(counter) + newValue);
  };
  const decreaseCounter = async () => {
    setNewValue(-parseInt(counter) + newValue);
  };
  const [baseValue, setBaseValue] = useState(50);
  const [counter, setCounter] = useState(0);
  const [newValue, setNewValue] = useState(baseValue);
  return (
    <div>
      <div>{newValue}</div>
      <input type="text" onChange={(e) => setCounter(e.target.value)} />
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
    </div>
  );
};

export default Counter;
