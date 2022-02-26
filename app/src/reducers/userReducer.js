import { GET_ALL } from '../actions/user.action';

const initialState = {
  userList: [],
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
      return initialState;
  }
};

export default userReducer;
