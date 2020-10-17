import { HttpStatusCode } from "../config/http";
import Response from "../utils/response";
import * as express from "express";
import { UserPayloadBody, UserMethods, PatchUserBody } from "../services/user.service";

export default class UserController {
  public static async getAll(req: express.Request, res: express.Response) {
    try {
      let users = await UserMethods.getAll();
      return new Response(HttpStatusCode.OK, users).sendJsonResponse(res);
    } catch (err) {
      return new Response(err._statusCode ?? HttpStatusCode.BAD_REQUEST, null, err.message).sendJsonResponse(res);
    }
  }

  public static async create(req: express.Request, res: express.Response) {
    try {
      let payload: UserPayloadBody = req.body;
      let newUser = await UserMethods.create(payload);
      return new Response(HttpStatusCode.OK, newUser).sendJsonResponse(res);
    } catch (err) {
      return new Response(err._statusCode ?? HttpStatusCode.BAD_REQUEST, null, err.message).sendJsonResponse(res);
    }
  }

  public static async getById(req: express.Request, res: express.Response) {
    try {
      let userId: string = req.params.id;
      let user = await UserMethods.getById(userId);
      return new Response(HttpStatusCode.OK, user).sendJsonResponse(res);
    } catch (err) {
      return new Response(err._statusCode ?? HttpStatusCode.BAD_REQUEST, null, err.message).sendJsonResponse(res);
    }
  }

  public static async updateOne(req: express.Request, res: express.Response) {
    try {
      let userId: string = req.params.id;
      let payload: PatchUserBody = req.body;
      let updatedId = await UserMethods.update(userId, payload);
      return new Response(HttpStatusCode.OK, { _id: updatedId }).sendJsonResponse(res);
    } catch (err) {
      return new Response(err._statusCode ?? HttpStatusCode.BAD_REQUEST, null, err.message).sendJsonResponse(res);
    }
  }

  public static async deletOne(req: express.Request, res: express.Response) {
    try {
      let userId: string = req.params.id;
      let deletedId = await UserMethods.delete(userId);
      return new Response(HttpStatusCode.OK, { _id: deletedId }).sendJsonResponse(res);
    } catch (err) {
      return new Response(err._statusCode ?? HttpStatusCode.BAD_REQUEST, null, err.message).sendJsonResponse(res);
    }
  }
}
