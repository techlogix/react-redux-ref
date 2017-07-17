'use strict';
// ES5
import React from 'react'
import ReactDOM from 'react-dom'

let Home = React.createClass({
    render: function(){
        return <h1>Hello JSX Component</h1>
    }
})

exports.App = Home.render;