import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};

class ConnectedForm extends Component {
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
    this.props.addUser({name});
    this.setState({name: ''});
  }

  render() {
    const {name} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            <input type='text' value={name} onChange={this.handleChange} id="name"/>
          </label>
        </div>
        <button type='submit'>Add User</button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;