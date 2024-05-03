import { Router } from "express";
import { getUsers,deleteUser,registerUser,loginUser,getUserById } from "../controllers/usersController";
import auth from "../middlewares/auth";

const usersRouter: Router = Router()

usersRouter.get("/",getUsers) //funciona con SQL

usersRouter.get("/:id",getUserById) //funciona con SQL

usersRouter.post("/register",registerUser) //funciona con SQL

usersRouter.post("/login",loginUser) //sin servicio aún

usersRouter.delete("/:id",deleteUser) //funciona con SQL

export default usersRouter
