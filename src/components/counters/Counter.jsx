import { useState } from 'react';
import './Counter.css';
function Counter() {
  const [value, setValue] = useState('0');
  let counterClassInfered = '';
  if (value >= 5) {
    counterClassInfered = 'high';
  }
  function increaseHandler() {
    setValue((prevValue) => {
      return prevValue + 1;
    });
  }
  function decreaseHandler() {
    setValue((prevValue) => {
      return prevValue - 1;
    });
  }
  return (
    <div className='counter card'>
      <h3>Counter</h3>
      <h2 className={`counter__value ${counterClassInfered}`}>{value}</h2>
      <div className='control'>
        <button onClick={increaseHandler}>+</button>
        <button onClick={decreaseHandler}>-</button>
      </div>
    </div>
  );
}
export default Counter;
