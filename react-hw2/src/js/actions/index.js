import {ADD_USER, DELETE_USER, FILTER_USERS} from '../constants/action-types';

export const addUser = user => ({
  type: ADD_USER,
  user
});

export const deleteUser = user => ({
  type: DELETE_USER,
  user
});

export const filterUsers = query => ({
  type: FILTER_USERS,
  query
});