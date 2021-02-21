import React, {useState} from 'react'
import '../App.css';

function Info({info}) {
  const [buttonClicked, setClicked] = useState(false)

  return (
    <div className={`info-screen ${info ? "show-info" : ""}`} >
          <ul className="stats">
            <li><em>0.400</em><br/>  coma </li>
            <li><em>0.350</em><br/>  in a drunken stupor </li>
            <li><em>0.300</em><br/>  emotionally and physically numb </li>
            <li><em>0.250</em><br/>  vomiting </li>
            <li><em>0.200</em><br/>  possible blackout (memory loss) </li>
            <li><em>0.100</em><br/>  lack of coordination and balance (legally drunk) </li>
            <li><em>0.050</em><br/>  warm and relaxed </li>
            <li><em>0.020</em><br/>  little lightheaded </li>
        </ul> 
    </div>
  );
}

export default Info;
