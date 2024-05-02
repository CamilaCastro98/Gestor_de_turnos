import { Router } from "express";
import { getUsers,deleteUser,registerUser,loginUser,getUserById } from "../controllers/usersController";
import auth from "../middlewares/auth";

const usersRouter: Router = Router()

usersRouter.get("/",getUsers) //funciona

usersRouter.get("/:id",getUserById) //funciona

usersRouter.post("/register",registerUser) //funciona

usersRouter.post("/login",loginUser) //sin servicio aún

usersRouter.delete("/:id",deleteUser) //funciona

export default usersRouter
