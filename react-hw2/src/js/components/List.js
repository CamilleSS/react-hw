import React from 'react';
import {connect} from 'react-redux';
import User from './User';
import './List.css';

const mapStateToProps = state => {
  return {users: state.users};
};

const ConnectedList = ({users}) => (
  <ul>
    {users.map(user => {
      if (user.visible)
        return <User key={user.id} user={user}/>;
      return null;
    })}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;