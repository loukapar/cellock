import express from "express";
import AccessControlController from "../controllers/access.control.controller";
import AccessControlValidators from "../validators/access.control.validator";
const router = express.Router();

router.route("/login").post(AccessControlValidators.loginUserValidation, AccessControlController.login);

export default router;
