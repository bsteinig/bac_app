import React from 'react' 


function LandingPage({ HandleStartClick, counter}) {

    return (
        <div id="landing" className="landing-page comp">
            <div className="landing-text">
                <h2 className= "headline"> Track your Drinks </h2>
                <h4 className= "sub-head"> Know your limits. </h4>
                <h4 className= "sub-head"> Be safe. </h4>
            </div>
            <button className="btn landing-btn" onClick={HandleStartClick}>{ counter ? "Back to Menu" : "Get Started"}</button>
            
        </div>
        
    )
}

export default LandingPage;