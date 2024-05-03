import { Router } from "express";
import { getAppointments,getOneAppointment,createAppointment,cancelAppointment } from "../controllers/appointmentController";

const appointmentsRouter: Router = Router()

appointmentsRouter.get("/",getAppointments) //funciona con SQL

appointmentsRouter.get("/:id",getOneAppointment) //funciona con SQL

appointmentsRouter.post("/schedule",createAppointment) //funciona con SQL

appointmentsRouter.put("/cancel/:id",cancelAppointment) //funciona con SQL

export default appointmentsRouter