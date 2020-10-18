import { LOGIN_TYPE, LOGOUT_TYPE } from "./types";

const initialState = {
  loading: false,
  error: null,
  loggedIn: false,
  user: {
    _id: null,
    CellockName: null,
    CellockSurname: null,
    CellockAccessLevel: null,
  },
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_TYPE:
      return {
        ...state,
        loggedIn: false,
        user: {
          _id: null,
          CellockName: null,
          CellockSurname: null,
          CellockAccessLevel: null,
        },
      };
    case LOGIN_TYPE.PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_TYPE.FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
        loggedIn: false,
      };
    case LOGIN_TYPE.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        error: false,
        user: {
          _id: action.user._id,
          CellockName: action.user.CellockName,
          CellockSurname: action.user.CellockSurname,
          CellockAccessLevel: action.user.CellockAccessLevel,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default authenticationReducer;
