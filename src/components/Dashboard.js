import React from 'react' 
import Counter from './counter'

function Dashboard({userData, HandleExitClick, counter, setCounter, initTime, setInitTime}) {

    return (
        <div className="dashboard-page comp" id="dashboard">
            <Counter userData={userData} HandleExitClick={HandleExitClick}
                 counter={counter} setCounter={setCounter} 
                 initTime={initTime} setInitTime={setInitTime}/>
        </div>
    )
}

export default Dashboard;