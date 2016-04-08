import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>App</h1>
                { this.props.children }
            </div>
        )
    },
});

var Child = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Child { this.props.params.id }</h3>
            </div>
        )
    },
});

ReactDOM.render((
    <Router history={ hashHistory }>
        <Router path='/' component={ App }>
            <Router path='/child/:id' component={ Child } />
        </Router>
    </Router>
), document.getElementById('root'));
