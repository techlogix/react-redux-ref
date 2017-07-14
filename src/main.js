/**
 * CommonJS pattern has the exports at the end of the file
 * npm install --save browserify reactify vinyl-source-stream
 */

var React = require ('react')
var ReactDOM = require ('react-dom')

//import ReactDOM from 'react-dom';

$ = jQuery = require('jquery');// needs to be in the global namespace by bootstrap
var Home = require('./components/homePage');

var App = React.createClass({
    render: function(){return 
        (   <div className="jumbotron">
                <h1>PluralSight Administration</h1>
                <p>React, React Router and Flux for ultra-responsibe webapps.</p>
            </div>
        );
     }

})

ReactDOM.render(<App />, document.getElementById('root'));