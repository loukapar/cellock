import { Schema, Validator, ValidatorResult } from "jsonschema";
import ApiError from "../error";

export default class SchemaValidation {
  private static validator: Validator;

  public static get ValidatorInstance() {
    if (!SchemaValidation.validator) SchemaValidation.validator = new Validator();
    return SchemaValidation.validator;
  }
  public static validate(object: any, schema: Schema): Boolean {
    let result: ValidatorResult = SchemaValidation.ValidatorInstance.validate(object, schema);
    if (result.errors.length > 0) {
      throw new ApiError(result.errors[0].message);
    }
    return true;
  }
}
