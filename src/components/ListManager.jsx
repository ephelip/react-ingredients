var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  getInitialState: function() {
    return {items: [], newItemText:''};
  },
  onChange: function(e) {
    this.setState({newItemText: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var currentItems = this.state.items;
      //this.state is for data that can change !
      //this.props is read only

    currentItems.push(this.state.newItemText);

    this.setState({items: currentItems, newItemText:''});
      //set the state with the current item and reset the text field
  },
  render: function() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.newItemText} />
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
          //items property called in List class
  }
});

module.exports = ListManager;
