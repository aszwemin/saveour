React = require('react');
Budget = require('./components/Budget');

React.render(
    React.createElement(Budget, null),
    document.getElementById('budget-component')
);
