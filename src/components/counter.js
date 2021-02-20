import React, {useState, useEffect } from 'react'
import '../App.css';
import ReactTimer from "@xendora/react-timer"
/*
const useStateWithLocalStorage = localStorageKey => 
  const [timer3, setTimer3] = React.useState(
    parseInt(localStorage.getItem(localStorageKey))
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, timer3);
  }, [timer3]);

  return [timer3,setTimer3];
};
*/
let initialhour = new Date().getHours();
let initialminute = new Date().getMinutes();
let initialsecond = new Date().getSeconds();

function Counter({userData}) {
  /*
    const[timer3, setTimer3] = useStateWithLocalStorage('myValueInLocalStorage'
    );

    const onChange = event => {
      setTimer3(event.target.timer3);
*/
    var currenthour = new Date().getHours();
    var currentminute = new Date().getMinutes();
    var currentsecond = new Date().getSeconds();

    var hour = 0
    var minute = 0
    var second = 0

    const [counter, setCounter] = useState(0)

    useEffect(() => {
      if(currenthour >= initialhour){
        hour = currenthour - initialhour;
      }
      else{
        hour = 24 - currenthour;
      }
  
      if(currentminute >= initialminute){
        minute = currentminute - initialminute;
      }
      else{
        minute = 60 - currentminute;
      }
  
      if(currentsecond >= initialsecond){
        second = currentsecond - initialsecond;
      }
      else{
        second = 60 - currentsecond;
      }
      console.log(second)
  }, [counter])

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
        <div className ="data" style={{color: "whitesmoke", fontFamily: "Poppins,sans-serif", fontSize: "25px"}} >Time: 
                {(Math.floor(initialhour%12)).toString().padStart(2, '0')}:
                {Math.floor(initialminute).toString().padStart(2, '0')}:
                {Math.floor(initialsecond).toString().padStart(2, '0')}</div>
        <div className ="data" style={{color: "whitesmoke", fontFamily: "Poppins,sans-serif", fontSize: "25px"}} >Time: 
                {(Math.floor(currenthour%12)).toString().padStart(2, '0')}:
                {Math.floor(currentminute).toString().padStart(2, '0')}:
                {Math.floor(currentsecond).toString().padStart(2, '0')}</div>
        <div className ="data" style={{color: "whitesmoke", fontFamily: "Poppins,sans-serif", fontSize: "25px"}} >Time: 
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
              <div className ="data" style={{color: "whitesmoke", fontFamily: "Poppins,sans-serif", fontSize: "25px"}} >Time: 
                {(Math.floor(time/3600)).toString().padStart(2, '0')}:
                {Math.floor((time/60)%60).toString().padStart(2, '0')}:
                {Math.floor(time%60).toString().padStart(2, '0')}</div>
              <div className ="bac" style={{color: "#233043", fontFamily: "Poppins,sans-serif", fontSize: "75px"}}>BAC: </div>
              <div className ="bac" style={{color: "#233043", fontFamily: "Poppins,sans-serif", fontSize: "75px"}}> 
                {(counter*.4*1.5*5.4)/(weight*sex) - .015*(time/3600) > 0 ? formatter.format((counter*.4*1.5*5.4)/(weight*sex) - .015*(time/3600)) : formatter.format(0.000)}</div>
            </div>}
      </ReactTimer>
      <div className ="data" style={{color: "whitesmoke", fontFamily: "Poppins,sans-serif", fontSize: "25px"}}> Drinks: {counter} | Drinks/Hour: {counter/hour}</div>
      <button className ="blurred-box add-drink" onClick={handleButtonClick}><h1>Add Drink</h1></button>
    </div>
  );
}

export default Counter;
