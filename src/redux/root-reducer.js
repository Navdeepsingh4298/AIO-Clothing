import { combineReducers } from 'redux';

// user reducer
import userReducer from './user/user.reducer';

// cart reducer
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});