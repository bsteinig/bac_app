import React from 'react' 


function LandingPage({start, setStart, HandleStartClick}) {

    return (
        <div id="landing" className="landing-page comp">
            <div className="landing-text">
                <h2 className= "headline"> Track your Drinks </h2>
                <h4 className= "sub-head"> Know your limits. </h4>
                <h4 className= "sub-head"> Be safe. </h4>
            </div>
            <div className="submit-btn">
                <button onClick={HandleStartClick}>Get Started</button>
            </div>
            
        </div>
        
    )
}

export default LandingPage;