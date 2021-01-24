import React from 'react' 
import Counter from './counter'
import Info from './info'
import Bg from "../assets/bg.png"

function Dashboard({userData}) {

    return (
        <div className="form-bg"
        style={{ backgroundImage: `url(${Bg})`}}>
            <h1 className = "title t3">BAC Track</h1>
            <Counter userData={userData}/>
            <Info />
        </div>
    )
}

export default Dashboard;