import { Router } from "express";
import { getAppointments,getOneAppointment,createAppointment,cancelAppointment } from "../controllers/appointmentController";

const appointmentsRouter: Router = Router()

appointmentsRouter.get("/",getAppointments) //funciona

appointmentsRouter.get("/:id",getOneAppointment) //funciona

appointmentsRouter.post("/schedule",createAppointment) //funciona

appointmentsRouter.put("/cancel/:id",cancelAppointment) //funciona

export default appointmentsRouter