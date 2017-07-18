import React from 'react'
import ReactDOM from 'react-dom'
import Couter from './counter'
/**
 * This is a stateless user. However active is stateful.
 * Notice that we have made this a const (best practice)
 * you must call setState with a json for state.
 * getInitialState is a lifecycle method - it will return a json object
 */
const User = React.createClass({
    getInitialState: function(){
        return {
            active: false
        }
    },
    render: function(name, twitter){
            let twitter=(props.twitter)? this.renderTwitterLink(props.twitter):null
            let activeText = (this.state.active)?'active':'inactive'
            return (
                
                <div className='user'>
                    <div>{props.name} {twitter}</div>
                    <div>{activeText} </div>
                    <button onClick={this.toggleActive}>Toggle </button>
                </div>
                
            )
    },
    renderTwitterLink: function(twitterId){
        return <a href={'http://twitter.com/' + twitterId}> Twitter</a>
    },
    toggleActive: function(){
        console.log('toggle handled')
        return this.state.active? this.setState({active:false}) : this.setState({active:true})
    }
})

module.exports=User