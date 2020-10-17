import express from "express";
import env from "./config/environment";
import * as bodyParser from "body-parser";
import userRoutes from "./routes/user.route";
import accessControlRoutes from "./routes/access.control.route";
/**
 * App Variables
 */
const app: express.Application = express();
const port: string = env.PORT;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

/**
 * Routes Definitions
 */
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("API works");
});

app.use("/api/user", userRoutes);
app.use("/api/access_control", accessControlRoutes);

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
