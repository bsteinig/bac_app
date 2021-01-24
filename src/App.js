import React, {useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
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
                <Route path="/Dashboard" render={() => isComplete(Dashboard)}/>
            </Switch>
        </BrowserRouter>
    )
  
}

export default App;
