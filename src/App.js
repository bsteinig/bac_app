import React, {useState} from 'react'
import Dashboard from './components/Dashboard'
import FormPage from './components/FormPage'
import LandingPage from './components/LandingPage'
import './App.css';

function App() {
        
    const [toContinue, setContinue] = useState(true)
    const [isComplete, setComplete] = useState(false)	   
    const [userData, setUserData] = useState({	
        sex: "",   
        weight: "",	        
    })	    
    if(toContinue){
        return (
            <LandingPage setContinue={setContinue}/>
        )
    } else {
        if(isComplete){
            return (
                <Dashboard userData={userData}/>
            )
        } else {
            return (
                <FormPage setComplete={setComplete} setUserData={setUserData}/>
            )
        }
    }
}

export default App
