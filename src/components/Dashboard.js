import React from 'react' 
import Counter from './counter'
import Info from './info'

function Dashboard({userData}) {

    return (
        <div>
            <h1 className = "title t3">BAC Track</h1>
            <Counter userData={userData}/>
            <Info />
        </div>
    )
}

export default Dashboard;