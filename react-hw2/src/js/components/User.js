import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteUser } from '../actions/index';

const mapStateToProps = state => {
  return {stateFromReducer: state};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: bindActionCreators(deleteUser, dispatch)
  }
}

class ConnectedUser extends Component {
  constructor() {
    super();
    this.delUser = this.delUser.bind(this);
  }

  delUser() {
    this.props.deleteUser(this.props.user);
  };

  render() {
    return (
      <li>
        {this.props.user.id}
        {this.props.user.name}
        <button onClick={this.delUser} value={this.props.user.id}>
          X
        </button>
      </li>
    );
  }
}

const User = connect(mapStateToProps, mapDispatchToProps)(ConnectedUser);

export default User;