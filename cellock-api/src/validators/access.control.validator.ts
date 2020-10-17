import * as express from "express";
import { Schema } from "jsonschema";
import { HttpStatusCode } from "../config/http";
import Response from "../utils/response";
import SchemaValidation from "../utils/schemaValidation";

export default class AccessControlValidators {
  static loginUserValidation(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      let schema: Schema = {
        type: "object",
        properties: {
          username: { type: "string" },
          password: { type: "string" },
        },
        required: ["username", "password"],
        additionalProperties: false,
      };
      SchemaValidation.validate(req.body, schema);
      next();
    } catch (err) {
      return new Response(err._statusCode ?? HttpStatusCode.BAD_REQUEST, null, err.message).sendJsonResponse(res);
    }
  }
}
