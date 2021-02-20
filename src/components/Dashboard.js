import React from 'react' 
import Counter from './counter'
import Info from './info'


function Dashboard({userData, complete, setStart, setComplete, HandleHomeClick, HandleExitClick}) {

    return (
        <div className="dashboard-page comp" id="dashboard">
            <Info />
            <Counter userData={userData}/>
            <button onClick={HandleHomeClick}>Home</button>
            <button onClick={HandleExitClick}>Finished</button>
        </div>
    )
}

export default Dashboard;