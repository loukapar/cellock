import { UsersMethods } from "../../../utils/backend/users.service";
import { GET_USERS, UPDATE_USER, DELETE_USER, CREATE_USER } from "./types";

class GetUsers {
  static success(userList) {
    return {
      type: GET_USERS.SUCCESS,
      userList: userList,
    };
  }

  static failure(error) {
    return {
      type: GET_USERS.FAILED,
      error: error,
    };
  }

  static pending() {
    return {
      type: GET_USERS.PENDING,
    };
  }

  execute() {
    return async function (dispatch) {
      try {
        dispatch(GetUsers.pending());
        let users = await UsersMethods.getUsers();
        dispatch(GetUsers.success(users.data));
      } catch (err) {
        dispatch(GetUsers.failure(err.message));
      }
    };
  }
}

class UpdateUser {
  static success() {
    return {
      type: UPDATE_USER.SUCCESS,
    };
  }

  static failure(error) {
    return {
      type: UPDATE_USER.FAILED,
      error: error,
    };
  }

  static pending() {
    return {
      type: UPDATE_USER.PENDING,
    };
  }

  execute(user_id, body) {
    return async function (dispatch) {
      try {
        dispatch(UpdateUser.pending());
        await UsersMethods.updateUser(user_id, body);
        dispatch(UpdateUser.success());
      } catch (err) {
        dispatch(UpdateUser.failure(err.message));
      }
    };
  }
}

class DeleteUser {
  static success() {
    return {
      type: DELETE_USER.SUCCESS,
    };
  }

  static failure(error) {
    return {
      type: DELETE_USER.FAILED,
      error: error,
    };
  }

  static pending() {
    return {
      type: DELETE_USER.PENDING,
    };
  }

  execute(user_id) {
    return async function (dispatch) {
      try {
        dispatch(DeleteUser.pending());
        await UsersMethods.deleteUser(user_id);
        dispatch(DeleteUser.success());
      } catch (err) {
        dispatch(DeleteUser.failure(err.message));
      }
    };
  }
}

class CreateUser {
  static success() {
    return {
      type: CREATE_USER.SUCCESS,
    };
  }

  static failure(error) {
    return {
      type: CREATE_USER.FAILED,
      error: error,
    };
  }

  static pending() {
    return {
      type: CREATE_USER.PENDING,
    };
  }

  execute(payload) {
    return async function (dispatch) {
      try {
        dispatch(CreateUser.pending());
        await UsersMethods.createUser(payload);
        dispatch(CreateUser.success());
      } catch (err) {
        dispatch(CreateUser.failure(err.message));
      }
    };
  }
}

export const getUsersExecution = new GetUsers().execute;
export const updateUserExecution = new UpdateUser().execute;
export const deleteUserExecution = new DeleteUser().execute;
export const createUserExecution = new CreateUser().execute;
