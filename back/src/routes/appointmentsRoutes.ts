import { Router } from "express";
import { getAppointments,getOneAppointment,createAppointment,cancelAppointment, getAppointmentsByUser } from "../controllers/appointmentController";
import validateDate from "../middlewares/Appointment/validateDate";
import validateTime from "../middlewares/Appointment/validateTime";
import duplicateAppValidate from "../middlewares/Appointment/duplicateAppValidate";
import validateService from "../middlewares/Appointment/validateService";

const appointmentsRouter: Router = Router()

appointmentsRouter.get("/",getAppointments) //funciona con SQL

appointmentsRouter.get("/:id",getOneAppointment) //funciona con SQL

appointmentsRouter.get("/schedule/:id",getAppointmentsByUser)

appointmentsRouter.post("/schedule",validateDate,validateTime,duplicateAppValidate,validateService,createAppointment) //funciona con SQL

appointmentsRouter.put("/cancel/:id",cancelAppointment) //funciona con SQL

export default appointmentsRouter