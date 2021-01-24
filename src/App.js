import React, {useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import FormPage from './components/FormPage'
import LandingPage from './components/LandingPage'
import './App.css';

function App() {
        
    const [toContinue, setContinue] = useState(false)
    const [isComplete, setComplete] = useState(false)	   
    const [userData, setUserData] = useState({	
        sex: "",   
        weight: "",	        
    })	    

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

export default App
