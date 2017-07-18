import React from 'react'
import ReactDOM from 'react-dom'

/**
 * A component that will count the seconds on a page.
 * Arrow function ensures that 'this' for the object is used.
 */
const Counter = React.createClass({
    getInitialState:function(){
        return {
            count:0
        }
    },
    componentDidMount: function(){
        setInterval(()=>{
            this.setState({count: (1+this.state.count)})
        },1000)
    },
    render: function(){
        return <div>Counter {this.state.count}</div>
    },
    componentWillUnmount: function (){
        console.log(this.state.count)
    }
}

)
module.exports = Counter;