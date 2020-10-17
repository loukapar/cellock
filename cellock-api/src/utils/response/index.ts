import * as express from "express";
import { HttpStatusCode, HttpStatusMessage } from "../../config/http";

export default class Response {
  private readonly _status;
  private readonly _data;
  private readonly _message;

  constructor(status: number, data: any, message?: string) {
    this._status = status;
    this._data = data;
    this._message = message ? message : this.messageByStatus(status);
  }

  private messageByStatus(status: number): string {
    if (status < HttpStatusCode.BAD_REQUEST) return HttpStatusMessage.SUCCESS;
    else return HttpStatusMessage.ERROR;
  }

  public get status(): number {
    return this._status;
  }

  public get data(): any {
    return this._data;
  }

  public get message(): string {
    return this._message;
  }

  public sendJsonResponse(res: express.Response): void {
    res.status(this._status).json({
      status: this._status,
      data: this._data,
      message: this._message,
    });
  }
}
