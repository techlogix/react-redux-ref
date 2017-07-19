import React from 'react'
import ReactDOM from 'react-dom'
import Couter from './Counter'

/**
 * Notice that we have made this a const (best practice)
 * you must call setState with a json for state.
 * getInitialState is a lifecycle method - it will return a json object
 */
const User = React.createClass({
    getInitialState: function(){
        return {
            active: true
        }
    },
    render: function(){
            let twitter=(this.props.twitter)? this.renderTwitterLink(this.props.twitter):null
            let activeText = (this.state.active)?'active':'inactive'
            return (
                <div className='user'>
                    <div>{this.props.name} {twitter}</div>
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