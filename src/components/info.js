import React, {useState} from 'react'
import '../App.css';

function Info() {
  const [buttonClicked, setClicked] = useState(false)

  const HandleBtnClick = () => {
    setClicked(!buttonClicked)
  }

  return (
    <div>
        <button onClick={HandleBtnClick}> More Information </button>
        { buttonClicked ? 
          <ul class="stats">
            <li>.40% - coma </li>
            <li>.30% - in a drunken stupor </li>
            <li>.25% - emotionally and physically numb </li>
            <li>.20% - vomiting </li>
            <li>.15% - possible blackout (memory loss) </li>
            <li>.10% - lack of coordination and balance (legally drunk) </li>
            <li>.05% - warm and relaxed </li>
            <li>.02% - little lightheaded </li>
        </ul> :
         <></>}
    </div>
  );
}

export default Info;
