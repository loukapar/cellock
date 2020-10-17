import { IUser } from "../models/user.model";
import DB from "../utils/database";
import ApiError from "../utils/error";

export interface UserPayloadBody {
  CellockName: string;
  CellockSurname: string;
  CellockAccessLevel: number;
}

export interface PatchUserBody {
  CellockName?: string;
  CellockSurname?: string;
  CellockAccessLevel?: number;
}

export class UserMethods {
  static async getAll(): Promise<IUser[]> {
    let user = await DB.Models.User.find({});
    return user;
  }

  static async create(payload: UserPayloadBody): Promise<IUser> {
    let result = await DB.Models.User.create(payload);
    if (!result) {
      throw new ApiError(`Unable to create user ${payload.CellockName} ${payload.CellockSurname}`);
    }
    return result;
  }

  static async getById(id: string): Promise<IUser> {
    let user = await DB.Models.User.findOne({ _id: id });
    if (!user) {
      throw new ApiError(`User with id ${id} does not exist`);
    }
    return user;
  }

  static async update(id: string, payload: PatchUserBody): Promise<string> {
    let result = await DB.Models.User.updateOne({ _id: id }, payload);
    if (result.nModified == 0) {
      throw new ApiError(`User with id ${id} does not exist`);
    }
    return id;
  }

  static async delete(id: string): Promise<string> {
    let response = await DB.Models.User.deleteOne({ _id: id });
    if (response.deletedCount == 0) {
      throw new ApiError(`User with id ${id} does not exist`);
    }
    return id;
  }
}
