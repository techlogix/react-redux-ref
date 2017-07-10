/**
 * CommonJS pattern has the exports at the end of the file
 * npm install --save browserify reactify vinyl-source-stream
 */

var App = console.log('Hello Browserify');
$ = jQuery = require('jquery');// needs to be in the global namespace by bootstrap

module.exports = App;
