import React from 'react';
import {connect} from 'react-redux';
import User from './User';

const mapStateToProps = state => {
  return {users: state.users};
};

const ConnectedList = ({users}) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        {user.name}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;