import React from 'react' 
import Counter from './counter'
import Info from './info'


function Dashboard({userData, complete, setStart, setComplete, HandleHomeClick, HandleExitClick}) {

    return (
        <div className="dashboard-page comp" id="dashboard">
            <Counter userData={userData} HandleExitClick={HandleExitClick}/>
        </div>
    )
}

export default Dashboard;