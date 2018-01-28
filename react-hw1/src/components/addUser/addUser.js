import React, { Component } from 'react';
import './addUser.css';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addUser: this.props.addUser,
      name: '',
      id: this.props.id
    };
    this.updateInput = this.updateInput.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  updateInput() {
    this.setState({
      name: this.refs.name.value
    });
  }

  addUser() {
    const name = this.refs.name.value;
    if (name) {
      this.props.addItem({
        id: this.props.id,
        name
      });
      this.refs.name.value = '';
    }
  }

  render() {
    return (
      <div>
        <input
          ref="name"
          type="text"
          placeholder="Name"
          onChange={this.updateInput}/>
        <button onClick={this.addUser}>Add</button>
      </div>
    )
  }
}

AddUser.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string
};

export default AddUser;