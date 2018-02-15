import React from 'react';
import {connect} from 'react-redux';
import User from './User';

const mapStateToProps = state => {
  return {users: state.users};
};

const ConnectedList = ({users}) => (
  <ul>
    {users.map(user => (
      <User key={user.id} user={user}/>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;