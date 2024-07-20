import React from 'react';
import { useState } from 'react';
import './name.css';
 
const TheButton = () => {
  const[counter, setCounter] = useState(0);
  const increment = () => {
      setCounter(counter + 1);
  };
  const decrement = () => {
      setCounter(counter - 1);
  };
  return (
      <>
      <div className = 'TheButton'>
        <button className = "myElement" onClick = {decrement}>-</button>
        {counter}
        <button className = "myElement"onClick = {increment}>+</button>
      </div>
      </>
  );
}


export default TheButton;