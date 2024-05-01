import { Router } from "express";
import usersRouter from "./usersRoute";
import appointmentsRouter from "./appointmentsRoutes";

const router: Router = Router()

router.use("/users",usersRouter)
router.use("/appointments",appointmentsRouter)

export default router