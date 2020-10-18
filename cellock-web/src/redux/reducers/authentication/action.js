import { LoginMethods } from "../../../utils/backend/login.service";
import { LOGIN_TYPE, LOGOUT_TYPE } from "./types";

class Login {
  static success(user) {
    return {
      type: LOGIN_TYPE.SUCCESS,
      user: user,
    };
  }

  static failure(error) {
    return {
      type: LOGIN_TYPE.FAILED,
      error: error,
    };
  }

  static pending() {
    return {
      type: LOGIN_TYPE.PENDING,
    };
  }

  execute(username, password) {
    return async function (dispatch) {
      try {
        dispatch(Login.pending());
        let user = await LoginMethods.login(username, password);
        dispatch(Login.success(user.data));
      } catch (err) {
        dispatch(Login.failure(err.message));
      }
    };
  }
}

class Logout {
  execute() {
    return function (dispatch) {
      dispatch({
        type: LOGOUT_TYPE,
      });
    };
  }
}

export const loginExecution = new Login().execute;
export const logoutExecution = new Logout().execute;
