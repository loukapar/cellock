import { GET_USERS, UPDATE_USER, DELETE_USER, CREATE_USER } from "./types";

const initialState = {
  loading: false,
  error: null,
  userList: [],
  updateList: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS.SUCCESS:
      return {
        ...state,
        loading: false,
        userList: action.userList,
        updateList: false,
      };
    case CREATE_USER.SUCCESS:
      return {
        ...state,
        loading: false,
        updateList: true,
      };
    case UPDATE_USER.SUCCESS:
      return {
        ...state,
        loading: false,
        updateList: true,
      };
    case DELETE_USER.SUCCESS:
      return {
        ...state,
        loading: false,
        updateList: true,
      };
    case GET_USERS.FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CREATE_USER.FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case UPDATE_USER.FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case DELETE_USER.FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_USERS.PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_USER.PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_USER.PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_USER.PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default usersReducer;
