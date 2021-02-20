import React, {useState, useEffect} from 'react'
import Dashboard from './components/Dashboard'
import FormPage from './components/FormPage'
import LandingPage from './components/LandingPage'
import logo from './assets/BACTRACK.png'
import landing from './assets/LandingScreen.png'
import form from './assets/FormScreen.png'
import dash from './assets/DashboardScreen.png'
import './App.css';

function App() {
    const [start, setStart] = useState(true);
    const [complete, setComplete] = useState(false);
    const [userData, setUserData] = useState({	
        sex: "",   
        weight: "",	        
    })
  
    useEffect(() => {
        document.getElementById("bg").style.backgroundImage= `url(${landing})`
    }, [])
  
  const HandleStartClick = () => {
    setStart(false);
    if(complete){ 
      document.getElementById("dashboard").style.opacity = "1";
      document.getElementById("dashboard").style.height = "93%"
      document.getElementById("bg").style.backgroundImage= `url(${dash})`
      document.getElementById("logobox").style.paddingTop = ".1rem"
      document.getElementById("circle").style.height = "65px"
      document.getElementById("circle").style.width = "65px"
      document.getElementById("outer-circle").style.height = "70px"
      document.getElementById("outer-circle").style.width = "70px";
      
    }else {
      document.getElementById("form").style.opacity = "1";
      document.getElementById("form").style.height = "80%" 
      document.getElementById("bg").style.backgroundImage= `url(${form})`
      document.getElementById("logobox").style.paddingTop = ".65rem"
      document.getElementById("circle").style.height = "150px"
      document.getElementById("circle").style.width = "150px"
      document.getElementById("outer-circle").style.height = "160px"
      document.getElementById("outer-circle").style.width = "160px";
    }
    document.getElementById("landing").style.height = "0";
    document.getElementById("landing").style.opacity = "0";
  }

  const HandleCompleteClick = () => {
    setComplete(true);
    document.getElementById("form").style.height = "0"; 
    document.getElementById("form").style.opacity = "0";
    document.getElementById("dashboard").style.opacity = "1";  
    document.getElementById("dashboard").style.height = "93%";
    document.getElementById("bg").style.backgroundImage= `url(${dash})`
    document.getElementById("logobox").style.paddingTop = ".1rem"
    document.getElementById("circle").style.height = "65px"
    document.getElementById("circle").style.width = "65px"
    document.getElementById("outer-circle").style.height = "70px"
    document.getElementById("outer-circle").style.width = "70px";
  }

  const HandleHomeClick = () => {
    setStart(true);
    document.getElementById("dashboard").style.height = "0";
    document.getElementById("dashboard").style.opacity = "0";
    document.getElementById("landing").style.opacity = "1"; 
    document.getElementById("landing").style.height = "55%";
    document.getElementById("bg").style.backgroundImage= `url(${landing})`
    document.getElementById("logobox").style.paddingTop = "2rem"
    document.getElementById("circle").style.height = "240px"
    document.getElementById("circle").style.width = "240px"
    document.getElementById("outer-circle").style.height = "250px"
    document.getElementById("outer-circle").style.width = "250px";
  }

  const HandleExitClick = () => {
    setStart(true);
    setComplete(false);
    document.getElementById("dashboard").style.height = "0";
    document.getElementById("dashboard").style.opacity = "0";
    document.getElementById("landing").style.opacity = "1"; 
    document.getElementById("landing").style.height = "55%";
    document.getElementById("bg").style.backgroundImage= `url(${landing})`
    document.getElementById("logobox").style.paddingTop = "2rem"
    document.getElementById("circle").style.height = "240px"
    document.getElementById("circle").style.width = "240px"
    document.getElementById("outer-circle").style.height = "250px"
    document.getElementById("outer-circle").style.width = "250px";
  }

  return (
    <div className="main-screen" id="bg">
      <div className="logo-header">
        <div className="logobox" id="logobox">
          <div className = "outer-circle circle" id="outer-circle">
            <div className="circle" id="circle">
              <img src={logo} width="250px" height="250px" alt="logo"/>
            </div>
          </div>
        </div>
      </div>
      <LandingPage start={start} setStart={setStart} HandleStartClick={HandleStartClick}/>
      <FormPage complete={complete} setComplete={setComplete} 
      HandleCompleteClick={HandleCompleteClick} setUserData={setUserData}/>
      <Dashboard userData={userData} complete={complete} setStart={setStart} setComplete={setComplete} 
        HandleHomeClick={HandleHomeClick} HandleExitClick={HandleExitClick}/>
    </div>
  )
}

export default App
