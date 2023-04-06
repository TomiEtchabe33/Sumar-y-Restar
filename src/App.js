import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <center>
      <h1 className='thirteen wrap'>Contador: {count}</h1>
      <button className='boton' onClick={increment}>Sumar</button>
      <p></p>
      <button className='boton' onClick={decrement}>Restar</button>
      </center>
    </div>
  );
}

export default Counter;