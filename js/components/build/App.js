'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = _react2.default.createClass({
    displayName: 'App',

    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h1',
                null,
                'App'
            ),
            this.props.children
        );
    }
});

var Child = _react2.default.createClass({
    displayName: 'Child',

    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h3',
                null,
                'Child ',
                this.props.params.id
            )
        );
    }
});

_reactDom2.default.render(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
        _reactRouter.Router,
        { path: '/', component: App },
        _react2.default.createElement(_reactRouter.Router, { path: '/child/:id', component: Child })
    )
), document.getElementById('root'));