import express from "express";
import UserController from "../controllers/user.controller";
import UserValidators from "../validators/user.validator";

const router = express.Router();

router.route("").get(UserController.getAll).post(UserValidators.createUserValidation, UserController.create);
router
  .route("/:id")
  .get(UserController.getById)
  .patch(UserValidators.updateUserValidation, UserController.updateOne)
  .delete(UserController.deletOne);

export default router;
