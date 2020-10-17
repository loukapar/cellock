import { HttpStatusCode } from "../../config/http";

export default class ApiError extends Error {
  readonly _statusCode;

  constructor(message: string, statusCode: number = HttpStatusCode.BAD_REQUEST) {
    super(message);
    this._statusCode = statusCode;
  }
}
