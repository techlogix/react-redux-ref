/**
 * CommonJS pattern has the exports at the end of the file
 * npm install --save browserify reactify vinyl-source-stream
 */
import React from 'react'
import ReactDOM from 'react-dom'
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
 */
const App1 = React.createClass({
    render: function(){
        return (
        <div> 
               <h1>{this.props.foo}</h1>       
            <User foo={this.props.foo} name="Brad Westfall" twitter="bradwestfall"/>
            <User name="Sood" twitter="techlogix"/>
        </div>
    )
    }
})

let User = React.createClass({
    render: function(){
        return (
        <div>
         {this.props.foo}   {this.props.name}: <a href={'http://twitter.com/' + this.props.twitter}> Twitter </a>

        </div>

        )
    }
})

ReactDOM.render(<App1 foo="Hello JSX, Props"/>, document.getElementById('root'))