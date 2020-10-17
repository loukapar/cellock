import { HttpStatusCode } from "../config/http";
import Response from "../utils/response";
import * as express from "express";
import { AccessControlMethods, LoginBody } from "../services/access.control.service";

export default class AccessControlController {
  public static async login(req: express.Request, res: express.Response) {
    try {
      let payload: LoginBody = req.body;
      let user = await AccessControlMethods.login(payload.username, payload.password);
      return new Response(HttpStatusCode.OK, user).sendJsonResponse(res);
    } catch (err) {
      return new Response(err._statusCode ?? HttpStatusCode.BAD_REQUEST, null, err.message).sendJsonResponse(res);
    }
  }
}
