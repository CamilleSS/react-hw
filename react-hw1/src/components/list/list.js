import React, { Component } from 'react';
import User from '../user/user';
import './list.css';

class List extends Component {
  constructor() {
    super();
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(item) {
    this.props.deleteItem(item);
  }

  render() {
    return (
      (this.props.users.length) ? <div>
        {this.props.users.map((item) => {
          return <User key={item.id} deleteItem={this.deleteUser} user={item}/>
        })}
      </div> : null
    );
  }
}

export default List;