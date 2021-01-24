import React from 'react' 
import Counter from './counter'
import Info from './info'

function Dashboard({userData}) {

    return (
        <div>
            <div>BAC Tracker</div>
            <Counter userData={userData}/>
            <Info />
        </div>
    )
}

export default Dashboard;