import React, {useState} from 'react'
import '../App.css';
import ReactTimer from "@xendora/react-timer"

function Counter({userData}) {
    const [counter, setCounter] = useState(0)
    const weight = parseInt(userData.weight);
    const sex = userData.sex == 'male' ? .73 : .66; 

    const handleButtonClick = () => {
        setCounter(counter => counter + 1)
    }

    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 3,      
      maximumFractionDigits: 3,
    });

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
        {time => 
            <div>
              <h1></h1>
              <div>Time: {(Math.floor(time/3600)).toString().padStart(2, '0')}:{Math.floor((time/60)%60).toString().padStart(2, '0')}:{Math.floor(time%60).toString().padStart(2, '0')}</div>
              <div>BAC: {Math.abs(formatter.format((counter*.4*1.5*5.4)/(weight*sex) - .015*(time/3600)))}</div>
            </div>}
      </ReactTimer>
    </div>
  );
}

export default Counter;
