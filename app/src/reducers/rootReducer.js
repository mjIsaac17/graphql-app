import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer
});

export default rootReducer;
