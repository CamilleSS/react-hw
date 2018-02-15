import {ADD_USER, DELETE_USER} from '../constants/action-types';

const initialState = {
  users: [],
  userId: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      let userId = state.userId + 1;
      action.user.id = userId;
      return {...state, users: [...state.users, action.user], userId};
    case DELETE_USER:
      let users = [...state.users];
      users = users.filter(item => item.id !== action.user.id);
      return {...state, users};
    default:
      return state;
  }
};

export default rootReducer;