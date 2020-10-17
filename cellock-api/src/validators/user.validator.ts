import * as express from "express";
import { Schema } from "jsonschema";
import { HttpStatusCode } from "../config/http";
import Response from "../utils/response";
import SchemaValidation from "../utils/schemaValidation";

export default class UserValidators {
  static createUserValidation(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      let schema: Schema = {
        type: "object",
        properties: {
          CellockName: { type: "string", maxLength: 100 },
          CellockSurname: { type: "string", maxLength: 100 },
          CellockAccessLevel: { type: "integer" },
        },
        required: ["CellockName", "CellockSurname", "CellockAccessLevel"],
        additionalProperties: false,
      };
      SchemaValidation.validate(req.body, schema);
      next();
    } catch (err) {
      return new Response(err._statusCode ?? HttpStatusCode.BAD_REQUEST, null, err.message).sendJsonResponse(res);
    }
  }

  static updateUserValidation(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      let schema: Schema = {
        type: "object",
        properties: {
          CellockName: { type: "string", maxLength: 100 },
          CellockSurname: { type: "string", maxLength: 100 },
          CellockAccessLevel: { type: "integer" },
        },
        required: [],
        additionalProperties: false,
      };
      SchemaValidation.validate(req.body, schema);
      next();
    } catch (err) {
      return new Response(err._statusCode ?? HttpStatusCode.BAD_REQUEST, null, err.message).sendJsonResponse(res);
    }
  }
}
