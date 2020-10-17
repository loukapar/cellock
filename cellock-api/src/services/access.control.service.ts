import { IUser } from "../models/user.model";
import DB from "../utils/database";
import ApiError from "../utils/error";
import { UserMethods } from "./user.service";

export interface LoginBody {
  username: string;
  password: string;
}

export class AccessControlMethods {
  public static async login(username: string, password: string): Promise<IUser> {
    let accessControl = await DB.Models.AccessControl.findOne({ username: username, password: password });
    if (!accessControl) {
      throw new ApiError("Invalid admin credentials");
    }
    let user = await UserMethods.getById(accessControl.user_id);
    return user;
  }
}
