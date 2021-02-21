import React, {useState, useEffect } from 'react'
import '../App.css';

function Counter({userData, HandleExitClick, counter, setCounter, initTime, setInitTime}) {
  const [drunk, setDrunk] = useState(false);
  const [currenthour, setCurrHour] = useState(0);
  const [currentminute, setCurrMin] = useState(0);
  const [currentsecond, setCurrSec] = useState(0);
  
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrHour(new Date().getHours())
      setCurrMin(new Date().getMinutes())
      setCurrSec(new Date().getSeconds())
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  var hour = 0
  var minute = 0
  var second = 0

  var math = 0;
  var math2 = 0;
  var diff = 0;
  math = currenthour*3600 + currentminute*60 + currentsecond;
  math2 = initTime.hour*3600 + initTime.minutes*60 + initTime.seconds;
  diff = math-math2;

  if(diff >= 0){
    hour = Math.floor(diff/3600);
    minute = Math.floor((diff/60)%60);
    second = Math.floor(diff%60);
  }
  else{
    var diff2 = 0;
    diff2 = 24*3600 + diff
    hour = Math.floor(diff2/3600);
    minute = Math.floor((diff2/60)%60);
    second = Math.floor(diff2%60);
  }

  const weight = parseInt(userData.weight);
  const sex = userData.sex === 'male' ? .73 : .66; 

  const handleButtonClick = () => {
      setCounter(counter => counter + 1)
      if(counter < 1){
        setInitTime( {
          hour: new Date().getHours(),
          minutes: new Date().getMinutes(),
          seconds: new Date().getSeconds()
      });
      }
  }

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 3,      
    maximumFractionDigits: 3,
  });
  return (
    <div className="onTop">

    <div class="clock">
    <div class="outer-clock-face">
      <div class="marking marking-one"></div>
      <div class="marking marking-two"></div>
      <div class="marking marking-three"></div>
      <div class="marking marking-four"></div>
      <div class="inner-clock-face">
        <div className ="data" className ="clock-time">
                  {(Math.floor(hour%12)).toString().padStart(2, '0')}:
                  {Math.floor(minute).toString().padStart(2, '0')}:
                  {Math.floor(second).toString().padStart(2, '0')}
          </div>
      </div>
    </div>
    </div>
      <h1 className ="bac-title">BAC:</h1>
      <h1 className ="bac-num"> 
        {(counter*.4*1.5*5.4)/(weight*sex) - .015*(hour) > 0 ? formatter.format((counter*.4*1.5*5.4)/(weight*sex) - .015*(hour)) : formatter.format(0.000)}
      </h1>
      <div className ="data"> Drinks: <span className="drink-count"> {counter} | </span> Drinks/Hour: <span className="drink-count"> {hour > 0 ? Math.floor(counter/hour) : counter} </span> </div>
      <div className="btn-group">
        <button className="med-btn color-btn" onClick={handleButtonClick}><i className="fas fa-beer"></i><h1>Add Drink</h1></button>
        <button className="med-btn color-btn" onClick={HandleExitClick}><i className="fas fa-check"></i><h1>Finished</h1></button>
      </div>
    </div>
  );
}

export default Counter;
 

/* 

    */