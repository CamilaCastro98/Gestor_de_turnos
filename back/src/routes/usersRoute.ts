import { Router } from "express";
import {
  getUsers,
  deleteUser,
  registerUser,
  loginUser,
  getUserById,
} from "../controllers/usersController";
import auth from "../middlewares/User/auth";
import validateDataExistence from "../middlewares/User/validateDataExistence";
import validateTypes from "../middlewares/User/validateTypes";
import validateBirthdate from "../middlewares/User/validateBirthdate";
import validateEmail from "../middlewares/User/validateEmail";
import validatePP from "../middlewares/User/validatePP";
import validateNDni from "../middlewares/User/validateNDni";
import validatePassword from "../middlewares/User/validatePassword";
import validateName from "../middlewares/User/validateName";
import validateUsername from "../middlewares/User/validateUsername";
import validateCredentialsExistence from "../middlewares/Login/validateCredentialsExistence";

const usersRouter: Router = Router();

usersRouter.get("/", getUsers); //funciona con SQL

usersRouter.get("/:id", getUserById); //funciona con SQL

usersRouter.post(
  "/register",
  validateDataExistence,
  validateName,
  validateTypes,
  validatePassword,
  validateEmail,
  validatePP,
  validateUsername,
  validateBirthdate,
  validateNDni,
  registerUser
); //funciona con SQL

usersRouter.post("/login",
validateCredentialsExistence,
loginUser); //funciona con SQL

usersRouter.delete("/:id", deleteUser); //funciona con SQL

export default usersRouter;
