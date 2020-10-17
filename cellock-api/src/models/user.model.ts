import { Schema, model, Document, Model } from "mongoose";

export declare interface IUser extends Document {
  CellockName: string;
  CellockSurname: string;
  CellockAccessLevel: number;
}

export interface UserModel extends Model<IUser> {}

export class User {
  private _model: Model<IUser>;

  constructor() {
    const schema = new Schema({
      CellockName: { type: String, required: true, maxlength: 100 },
      CellockSurname: { type: String, required: true, maxlength: 100 },
      CellockAccessLevel: { type: Number, required: true },
    });
    this._model = model<IUser>("User", schema);
  }

  public get model(): Model<IUser> {
    return this._model;
  }
}
