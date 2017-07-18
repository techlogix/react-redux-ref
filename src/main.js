/**
 * CommonJS pattern has the exports at the end of the file
 * npm install --save browserify reactify vinyl-source-stream
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/counter'
import User from './components/user'
import axis from 'axios'
//import App from './components/homePage'

//$ = jQuery = require('jquery');// needs to be in the global namespace by bootstrap
//var Home = require('./components/homePage');

/**
 * Create a Component using JS and not JSX.
 */
let App0 = React.createClass({
    render: function (){
        return React.createElement("h1",{},"Hello");
    }
})

/**
 * React Component with JSX
 * Before using state object - you should initialize the variables for the compnents.
 */
const App = React.createClass({
    getInitialState: function(){
        return {users:[]}
    },
    componentDidMount: function(){
        axis.get('http://swapi.co/api/people').then(response =>{
            console.log(response.data.results)
            this.setState({users:response.data.results})
        })
    },
    render: function(){
        console.log(this.state.users)
        return (
        <div> 
            <h1>{this.props.foo}</h1> 
           {
            this.state.users.map(user =>{
                return <User name={user.name} key={user.name}/>
            })
          
           }
         
        </div>
          
    )
    }
})

ReactDOM.render(<App foo="Star Wars Characters"/>, document.getElementById('root'))