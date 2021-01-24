import React from 'react' 
import Bg from '../assets/bg.png'
import logo from '../assets/BACTRACK.png'

function LandingPage({setContinue}) {

    const HandleOnClick = () => {
        setContinue(false);
    }

    return (
        <div className="landing-page" style={{ backgroundImage: `url(${Bg})`}}>
        <div className="divider"></div>
          <div className="logobox">
                <div className = "outer-circle circle">
                    <div className="circle">
                        <img src={logo} width="150px" height="150px" alt="logo"/>
                    </div>
                </div>
            </div>
            <div className="landing-text">
                <h2 className= "headline"> Keep Track of Your Drinks </h2>
                <h4 className= "sub-head"> Know your limits. </h4>
                <h4 className= "sub-head"> Be safe. </h4>
            </div>
            <div className="blurred-box">
                <h3 className="btn-text"> Click anywhere to start </h3>
            </div>
            <button className="launch-btn btn" onClick={HandleOnClick}>Launch App</button>
        </div>
        
    )
}

export default LandingPage;