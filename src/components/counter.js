import React, {useState, useEffect } from 'react'
import '../App.css';
import ReactTimer from "@xendora/react-timer"


let initialhour = new Date().getHours();
let initialminute = new Date().getMinutes();
let initialsecond = new Date().getSeconds();

function Counter({userData, HandleExitClick}) {
  const [drunk, setDrunk] = useState(false);
  const [currenthour, setCurrHour] = useState(0);
  const [currentminute, setCurrMin] = useState(0);
  const [currentsecond, setCurrSec] = useState(0);
  const [counter, setCounter] = useState(0)

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
  math2 = initialhour*3600 + initialminute*60 + initialsecond;
  diff = math-math2;

  if(diff >= 0){
    hour = Math.floor(diff/3600);
    minute = Math.floor((diff/60)%60);
    second = Math.floor(diff%60);
  }
  else{
    hour = 24 + currenthour - initialhour;
    minute = 60 + currentminute - initialminute;
    second = 60 + currentsecond - initialsecond;
  }

  const weight = parseInt(userData.weight);
  const sex = userData.sex === 'male' ? .73 : .66; 

  const handleButtonClick = () => {
      setCounter(counter => counter + 1)
  }

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 3,      
    maximumFractionDigits: 3,
  });

  return (
    <div className="onTop">
        <div className ="data" style={{color: "whitesmoke", fontFamily: "Poppins,sans-serif", fontSize: "25px"}} >
                {(Math.floor(initialhour%12)).toString().padStart(2, '0')}:
                {Math.floor(initialminute).toString().padStart(2, '0')}:
                {Math.floor(initialsecond).toString().padStart(2, '0')}</div>
        <div className ="data" style={{color: "whitesmoke", fontFamily: "Poppins,sans-serif", fontSize: "25px"}} >
                {(Math.floor(currenthour%12)).toString().padStart(2, '0')}:
                {Math.floor(currentminute).toString().padStart(2, '0')}:
                {Math.floor(currentsecond).toString().padStart(2, '0')}</div>
        <div className ="data" style={{color: "whitesmoke", fontFamily: "Poppins,sans-serif", fontSize: "25px"}} >
                {(Math.floor(hour%12)).toString().padStart(2, '0')}:
                {Math.floor(minute).toString().padStart(2, '0')}:
                {Math.floor(second).toString().padStart(2, '0')}</div>
        <ReactTimer
        start={0}
        end={() => false}
        onEnd={value => console.log('ENDED WITH VALUE', value)}
        onTick={value => value + 1}
      >
        {time => 
            <div>
              <div className ="data" style={{color: "whitesmoke", fontFamily: "Poppins,sans-serif", fontSize: "25px"}} > 
                {(Math.floor(time/3600)).toString().padStart(2, '0')}:
                {Math.floor((time/60)%60).toString().padStart(2, '0')}:
                {Math.floor(time%60).toString().padStart(2, '0')}</div>
              <div className ="bac" style={{color: "#233043", fontFamily: "Poppins,sans-serif", fontSize: "75px"}}>BAC: </div>
              <div className ="bac" style={{color: "#233043", fontFamily: "Poppins,sans-serif", fontSize: "75px"}}> 
                {(counter*.4*1.5*5.4)/(weight*sex) - .015*(time/3600) > 0 ? formatter.format((counter*.4*1.5*5.4)/(weight*sex) - .015*(time/3600)) : formatter.format(0.000)}</div>
            </div>}
      </ReactTimer>
      <div className ="data" style={{color: "whitesmoke", fontFamily: "Poppins,sans-serif", fontSize: "25px"}}> Drinks: {counter} | Drinks/Hour: {hour > 0 ? counter/hour : counter}</div>
      <div className="btn-group">
        <button className="med-btn" onClick={handleButtonClick}><i className="fas fa-beer"></i><h1>Add Drink</h1></button>
        <button className="med-btn" onClick={HandleExitClick}><i className="fas fa-check"></i><h1>Finished</h1></button>
      </div>
    </div>
  );
}

export default Counter;
