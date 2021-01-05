import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Connexion from './Components/Connexion'
import NotFound from './Components/NotFound'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom' // Imports

const Root = () => (
    <BrowserRouter>
        <Switch> {/* Permet de prendre en enfant plusieurs routes */}
            <Route exact path='/' component={ Connexion } />
            <Route path='/pseudo/:pseudo' component={ App } /> {/* :/ = définir un chemin de route pas exact */}
            <Route component={ NotFound } />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root')) 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
