import React from 'react' 
import Bg from '../assets/bg.png'

function LandingPage({setContinue}) {

    const HandleOnClick = () => {
        setContinue(false);
    }

    return (
        <div className="landing-page" style={{ backgroundImage: `url(${Bg})`}}>
            <h1 className="title">BAC Track</h1>
            <div className="row">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            <br></br>
            <h2 className= "top sub-head"> Keep track of your drinks </h2>
            <br></br>
            <h2 className= "sub-head"> Know your limits </h2>
            <br></br>
            <h2 className= "sub-head"> Be safe </h2>
            <br></br>
            <h3> Click anywhere to start </h3>
            <button className="launch-btn btn" onClick={HandleOnClick}>Launch App</button>
        </div>
        
    )
}

export default LandingPage;