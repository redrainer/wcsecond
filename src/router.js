import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from './Pages/app'
import Login from './Pages/login'
import Home from './Pages/home'


export default function IRouter() {
    return <Router>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
        </Switch>
    </Router>
}