import React, { Component } from 'react';
import './user.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser() {
    this.props.deleteItem(this.state.user);
  }

  render() {
    const user = this.state.user;
    return (
      <div className="user-item">
        <div className="user-subitem">
          {`${user.id}. ${user.name}`}
        </div>
        <div className="user-subitem">
          <button onClick={this.deleteUser}>X</button>
        </div>
      </div>
    )
  }
}

export default User;