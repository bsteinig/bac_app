import React, {useState} from 'react'
import '../App.css';

function Info() {
  const [buttonClicked, setClicked] = useState(false)

  const HandleBtnClick = () => {
    setClicked(!buttonClicked)
    console.log(buttonClicked)
  }

  return (
    <div>
        <div className="info-bar">
          <button onClick={HandleBtnClick} className="info-btn"> <i className="fas fa-info-circle"></i> </button>
        </div>
          <div className={`info-screen ${buttonClicked ? "show-info" : ""}`}>
          <ul className="stats">
            <li>.40% - coma </li>
            <li>.30% - in a drunken stupor </li>
            <li>.25% - emotionally and physically numb </li>
            <li>.20% - vomiting </li>
            <li>.15% - possible blackout (memory loss) </li>
            <li>.10% - lack of coordination and balance (legally drunk) </li>
            <li>.05% - warm and relaxed </li>
            <li>.02% - little lightheaded </li>
        </ul> 
        </div>
    </div>
  );
}

export default Info;
