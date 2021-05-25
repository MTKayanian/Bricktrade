import { combineReducers } from "redux";
import userReducer from "./login_signup/auth-reducers/auth.reducers";
import marketPlaceReducer from '../src/reducers/marketPlaceReducer';
import adminReducer from './reducers/adminReducer';
import kycDocReducer from './reducers/kycDocReducer';
import propertyReducer from './reducers/propertyReducer';


export default combineReducers({
  userReducer,
  marketPlaceReducer,
  adminReducer,
  kycDocReducer,
  propertyReducer
});
