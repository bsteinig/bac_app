import React from 'react' 
import Counter from './counter'
import Info from './info'

function Dashboard({userData}) {

    return (
        <div>
            <h1 className = "title">BAC Track</h1>
            <Counter userData={userData}/>
            <Info />
        </div>
    )
}

export default Dashboard;