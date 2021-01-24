import React, {useState, useEffect} from 'react'
import '../App.css';
import ReactTimer from "@xendora/react-timer"

const useStateWithLocalStorage = localStorageKey => {
  
  const [counter, setCounter] = React.useState(
    localStorage.getItem(localStorageKey)
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, 0);
  }, [counter]);

  return [counter, setCounter];
}

function Counter({userData}) {
  const KEY = "value";
  localStorage.setItem(counter, 0)
  function MyComponent() {
    const[counter, setCounter] = useState(
      parseInt(localStorage.getItem(KEY))
    );

    useEffect(() => {
      localStorage.setItem(KEY, counter);
    }, [counter]);
  }

  const[counter, setCounter] = useStateWithLocalStorage('myValueInLocalStorage'
  );

  const onChange = event => setCounter(event.target.counter);

    //const [counter, setCounter] = useState(0)
    const weight = parseInt(userData.weight);
    const sex = userData.sex == 'male' ? .73 : .66; 

    const handleButtonClick = () => {
        setCounter(counter + 1)
    }

    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 3,      
      maximumFractionDigits: 3,
    });

  return (
    <div>
        <button className ="add-drink" onClick={handleButtonClick}>Add Drink</button>
        <div className ="data"> Count: {counter}</div>
        <ReactTimer
        start={0}
        end={() => false}
        onEnd={value => console.log('ENDED WITH VALUE', value)}
        onTick={value => value + 1}
      >
        {time => 
            <div>
              <h1></h1>
              <div className ="data" >Time: {(Math.floor(time/3600)).toString().padStart(2, '0')}:{Math.floor((time/60)%60).toString().padStart(2, '0')}:{Math.floor(time%60).toString().padStart(2, '0')}</div>
              <div className ="bac">BAC: {Math.abs(formatter.format((counter*.4*1.5*5.4)/(weight*sex) - .015*(time/3600)))}</div>
            </div>}
      </ReactTimer>
    </div>
  );
}

export default Counter;
