import React, {Component, useState} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import FormPage from './components/FormPage'
import './App.css';

function App() {
  
    const [isComplete, setComplete] = useState(false)
    const [userData, setUserData] = useState({
        sex: "",
        weight: "",
    })

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <FormPage isComplete={isComplete} setComplete={setComplete} userData={userData} setUserData={setUserData}/>
                </Route>
                {isComplete ? <Redirect to="/dashboard" /> : <FormPage />}
            </Switch>
        </BrowserRouter>
    )
  
}

export default App;
