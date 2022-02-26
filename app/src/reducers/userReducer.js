import { GET_ALL } from '../actions/user.action';

const initialState = {
  userList: null,
  selectedUser: null
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        userList: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
