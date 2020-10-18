import { combineReducers } from "redux";
import authenticationReducer from "./reducers/authentication/reducer";
import usersReducer from "./reducers/user/reducer";

const rootReducer = combineReducers({
  authenticationReducer: authenticationReducer,
  usersReducer: usersReducer,
});

export default rootReducer;
