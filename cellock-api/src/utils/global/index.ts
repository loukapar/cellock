import ApiError from "../error";
import * as bcrypt from "bcrypt";
import env from "../../config/environment";

export default class Utils {
  public static isValidEmail(email: string): boolean {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailValid = emailRegex.test(String(email).toLowerCase());
    if (!emailValid) throw new ApiError("Invalid email format");
    return emailValid;
  }

  public static isValidPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/;
    let passwordValid = passwordRegex.test(String(password));
    if (!passwordValid) throw new ApiError("Invalid password format");
    return passwordValid;
  }

  public static async hash(plaintext: string) {
    let result = await bcrypt.hash(plaintext, env.SALT_ROUNDS);
    return result;
  }

  public static async compareHash(plaintext: string, hash: string) {
    let result = await bcrypt.compare(plaintext, hash);
    return result;
  }
}
