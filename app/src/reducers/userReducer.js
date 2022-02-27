import { ADD, DELETE, GET, GET_ALL, UPDATE } from '../actions/user.action';

const initialState = {
  userList: null,
  selectedUser: null
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        selectedUser: action.payload
      };

    case GET_ALL:
      return {
        ...state,
        userList: action.payload
      };

    case ADD:
      return {
        ...state,
        userList: [...state.userList, action.payload]
      };

    case UPDATE:
      const id = action.payload.id;
      return {
        ...state,
        userList: state.userList.map((user) =>
          user.id !== id ? user : action.payload
        )
      };

    case DELETE:
      const deletedId = action.payload;
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== deletedId)
      };

    default:
      return state;
  }
};

export default userReducer;
