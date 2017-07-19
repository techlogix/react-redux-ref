/**
 * CommonJS pattern has the exports at the end of the file
 * npm install --save browserify reactify vinyl-source-stream
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import Users from './components/Users'
import Profile from './components/Profile'
import MainLayout from './layouts/MainLayout'
import {Link, IndexRoute, browserHistory, Route, Router} from 'react-router'

ReactDOM.render((
<Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
        <IndexRoute component={Users}/>
        <Route path="/profile" component={Profile}/>
    </Route>
</Router>),
document.getElementById('root'))