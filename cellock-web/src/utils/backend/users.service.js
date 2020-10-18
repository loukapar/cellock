import FetchRequest from "../fetch";
import CONFIGURATION from "../../config/config";
export class UsersMethods {
  static async getUsers() {
    let users = await FetchRequest(`${CONFIGURATION.API_URL}/user`, "GET");
    if (![200, 201].includes(users.status)) throw new Error(users.message);
    return users;
  }

  static async updateUser(user_id, body) {
    let res = await FetchRequest(
      `${CONFIGURATION.API_URL}/user/${user_id}`,
      "PATCH",
      body
    );
    if (![200, 201].includes(res.status)) throw new Error(res.message);
    return res;
  }

  static async deleteUser(user_id) {
    let res = await FetchRequest(
      `${CONFIGURATION.API_URL}/user/${user_id}`,
      "DELETE"
    );
    if (![200, 201].includes(res.status)) throw new Error(res.message);
    return res;
  }

  static async createUser(payload) {
    let res = await FetchRequest(
      `${CONFIGURATION.API_URL}/user`,
      "POST",
      payload
    );
    if (![200, 201].includes(res.status)) throw new Error(res.message);
    return res;
  }
}
