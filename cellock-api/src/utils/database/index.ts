import { connect, connection, Connection, Error } from "mongoose";
import env from "../../config/environment";
import { AccessControl, AccessControlModel } from "../../models/access.control.model";
import { User, UserModel } from "../../models/user.model";

declare interface IModels {
  User: UserModel;
  AccessControl: AccessControlModel;
}

export default class DB {
  private static instance: DB;

  private _db: Connection;
  private _models: IModels;

  private constructor() {
    connect(env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    this._db = connection;
    this._db.on("open", this.connected);
    this._db.on("error", this.error);

    this._models = {
      User: new User().model,
      AccessControl: new AccessControl().model,
    };
  }

  public static get Models(): IModels {
    if (!DB.instance) {
      DB.instance = new DB();
    }
    return DB.instance._models;
  }

  private connected(): void {
    console.log("Mongoose has connected");
  }

  private error(error: Error): void {
    console.log("Mongoose has error", error);
  }
}
