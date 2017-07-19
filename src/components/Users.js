import React from 'react'
import ReactDOM from 'react-dom'
import Couter from './Counter'
import User from './User'
import PeopleProxy from '.././proxies/PeopleProxy'
import {Link, browserHistory, Route, Router} from 'react-router'
/**
 * This is a stateless user. However active is stateful.
 * Notice that we have made this a const (best practice)
 * you must call setState with a json for state.
 * getInitialState is a lifecycle method - it will return a json object
 */
/**
 * React Component with JSX
 * Before using state object - you should initialize the variables for the compnents.
 */
const Users = React.createClass({
    getInitialState: function(){
        return {users:[]}
    },
    componentDidMount: function(){            
            (new PeopleProxy()).getPeople().then(response =>{
            console.log(response.data.results)
            this.setState({users:response.data.results})
        })
    },
    render: function(){
        console.log(this.state.users)
        return (
        <div> 
            <h1>yes</h1> 
            <Link to="/profile">Profile</Link>
           {
            this.state.users.map(user => {
                return <User name={user.name} key={user.name}/>
            })
          
           }
         
        </div>
    )
    }
})

module.exports=Users