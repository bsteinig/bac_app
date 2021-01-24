import React, {useState} from 'react'
import '../App.css';

function Counter() {
    const [counter, setCounter] = useState(0)

    const handleButtonClick = () => {
        setCounter(counter => counter + 1)
    }

    const handleSecondButtonClick = () => {
        setCounter(counter => 0)
    }

  return (
    <div>
        <div> count: {counter}</div>
        <button onClick={handleButtonClick}>increment</button>
        <button onClick={handleSecondButtonClick}>restart</button>
    </div>
  );
}

export default Counter;
