import React from 'react' 
import Counter from './counter'
import Info from './info'
import Bg from "../assets/bg.png"
import logo from "../assets/BACTRACK.png"

function Dashboard({userData}) {

    return (
        <div className="form-bg"
        style={{ backgroundImage: `url(${Bg})`}}>
            <Info />
             <div className="logobox">
                <div className = "outer-circle circle">
                    <div className="circle">
                        <img src={logo} width="150px" height="150px" alt="logo"/>
                    </div>
                </div>
            </div>
            
            <Counter userData={userData}/>
        </div>
    )
}

export default Dashboard;