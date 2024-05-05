import { Router } from "express";
import { getAppointments,getOneAppointment,createAppointment,cancelAppointment } from "../controllers/appointmentController";
import validateDate from "../middlewares/Appointment/validateDate";
import validateTime from "../middlewares/Appointment/validateTime";

const appointmentsRouter: Router = Router()

appointmentsRouter.get("/",getAppointments) //funciona con SQL

appointmentsRouter.get("/:id",getOneAppointment) //funciona con SQL

appointmentsRouter.post("/schedule",validateDate,validateTime,createAppointment) //funciona con SQL

appointmentsRouter.put("/cancel/:id",cancelAppointment) //funciona con SQL

export default appointmentsRouter