import React from 'react' 
import {Link} from 'react-router-dom'

function LandingPage() {

    return (
        <div>
            <div>Landing Page!</div>
            <Link to="/dashboard">Go to Dashboard</Link>
        </div>
        
    )
}

export default LandingPage;