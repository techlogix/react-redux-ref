'use strict';
// ES5
import React from 'react'
import ReactDOM from 'react-dom'

let Home = React.createClass({
    render: function ()
    {
        return (
            <div className="jumbotron">
                <h1>PluralSight Administration</h1>
                <p>React, React Router and Flux for ultra-responsibe webapps.</p>
            </div>
        );
    }
});

ReactDom.render(<Home />, document.getElementById('app'))