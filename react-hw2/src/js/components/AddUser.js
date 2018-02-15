import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import './AddUser.css';

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};

class ConnectedAddUser extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {name} = this.state;
    if (name) {
      this.props.addUser({name, visible: true});
      this.setState({name: ''});
    }
  }

  render() {
    const {name} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            <input
            type="text"
            id="name"
            value={name}
            placeholder="name"
            onChange={this.handleChange}/>
          </label>
        </div>
        <button type='submit'>Add User</button>
      </form>
    );
  }
}

const AddUser = connect(null, mapDispatchToProps)(ConnectedAddUser);

export default AddUser;