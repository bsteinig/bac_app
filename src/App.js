import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import FormPage from './components/FormPage'
import LandingPage from './components/LandingPage'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isComplete: false,
            sex: "",
            weight: 0
        }
    }
    

    ifFormComplete(Component) {
        return this.state.isComplete ?
            <Component/> :
            <FormPage/>
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <LandingPage/>
                    </Route>
                    <Route path="/dashboard" render={() => this.ifFormComplete(Dashboard)}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
