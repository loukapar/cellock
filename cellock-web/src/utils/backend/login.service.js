import FetchRequest from "../fetch";
import CONFIGURATION from "../../config/config";
export class LoginMethods {
  static async login(username, password) {
    let user = await FetchRequest(
      `${CONFIGURATION.API_URL}/access_control/login`,
      "POST",
      {
        username: username,
        password: password,
      }
    );
    if (![200, 201].includes(user.status)) throw new Error(user.message);
    return user;
  }
}
