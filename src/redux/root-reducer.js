import { combineReducers } from 'redux';

// user reducer
import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
});