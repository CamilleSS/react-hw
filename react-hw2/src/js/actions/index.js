import {ADD_USER, DELETE_USER} from '../constants/action-types';

export const addUser = user => ({
  type: ADD_USER,
  user
});

export const deleteUser = user => ({
  type: DELETE_USER,
  user
});