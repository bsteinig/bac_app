import React, {useState} from 'react'
import '../App.css';
import ReactTimer from "@xendora/react-timer"

function Counter() {
    const [counter, setCounter] = useState(0)
    const [bac, setBAC] = useState(0)

    const handleButtonClick = () => {
        setCounter(counter => counter + 1)
    }

  return (
    <div>
        <button onClick={handleButtonClick}>Add Drink</button>
        <div> Count: {counter}</div>
        <ReactTimer
        start={0}
        end={() => false}
        onEnd={value => console.log('ENDED WITH VALUE', value)}
        onTick={value => value + 1}
      >
        {time => <div><div>Timer: {time}</div><div>BAC: {.4*1.5 + time/3600}</div></div>}
      </ReactTimer>
    </div>
  );
}

export default Counter;
