var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Cake" />, document.getElementById('cake'));
                            //title is a property
ReactDOM.render(<ListManager title="Pie" />, document.getElementById('pie'));
ReactDOM.render(<ListManager title="Sushi" headingColor="pink" />, document.getElementById('sushi'));
