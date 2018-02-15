import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {users: state.users};
};

const ConnectedUser = ({user}) => (
  <li key={user.id}>
    {user.id}
    {user.name}
  </li>
);

const User = connect(mapStateToProps)(ConnectedUser);

export default User;