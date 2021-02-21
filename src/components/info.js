import React, {useState} from 'react'
import '../App.css';

function Info({info}) {
  const [buttonClicked, setClicked] = useState(false)

  return (
    <div className={`info-screen ${info ? "show-info" : ""}`} >
          <ul className="stats">
            <li><strong>0.400</strong><br/>  coma </li>
            <li><strong>0.350</strong><br/>  in a drunken stupor </li>
            <li><strong>0.300</strong><br/>  emotionally and physically numb </li>
            <li><strong>0.250</strong><br/>  vomiting </li>
            <li><strong>0.200</strong><br/>  possible blackout (memory loss) </li>
            <li><strong>0.100</strong><br/>  lack of coordination and balance (legally drunk) </li>
            <li><strong>0.050</strong><br/>  warm and relaxed </li>
            <li><strong>0.020</strong><br/>  little lightheaded </li>
        </ul> 
    </div>
  );
}

export default Info;
