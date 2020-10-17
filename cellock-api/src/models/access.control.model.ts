import { Schema, model, Document, Model } from "mongoose";

export declare interface IAccessControl extends Document {
  username: string;
  password: string;
  user_id: string;
}

export interface AccessControlModel extends Model<IAccessControl> {}

export class AccessControl {
  private _model: Model<IAccessControl>;

  constructor() {
    const schema = new Schema({
      username: { type: String, required: true },
      password: { type: String, required: true },
      user_id: { type: String, required: true },
    });
    this._model = model<IAccessControl>("AccessControl", schema);
  }

  public get model(): Model<IAccessControl> {
    return this._model;
  }
}
