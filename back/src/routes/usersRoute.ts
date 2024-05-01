import { Router } from "express";
import { getUsers,deleteUser,registerUser,loginUser,getUserId } from "../controllers/usersController";
import auth from "../middlewares/auth";

const usersRouter: Router = Router()

usersRouter.get("/",auth,getUsers)

usersRouter.get("/:id",auth,getUserId)

usersRouter.post("/register",registerUser)

usersRouter.post("/login",loginUser)

usersRouter.delete("/:id",deleteUser)

export default usersRouter
