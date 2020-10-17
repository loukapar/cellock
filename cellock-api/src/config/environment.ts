import * as dotenv from "dotenv";
dotenv.config();

const env: EnvironmentVariables = {
  PORT: process.env.PORT ?? "8000",
  SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS || "10"),
  MONGO_URI: process.env.MONGO_URI ?? "",
};

interface EnvironmentVariables {
  PORT: string;
  SALT_ROUNDS: number;
  MONGO_URI: string;
}

export default env;
