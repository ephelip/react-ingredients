var React = require('react');

var ListItem = React.createClass({
  render: function() {
    return(
      <li>
          <h4>{this.props.text}</h4>
      </li>
    );
    // js: grab the data in the property called text from this object
  }
});

module.exports = ListItem;
