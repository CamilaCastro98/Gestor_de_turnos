import { Router } from "express";
import { getAppointments,getOneAppointment,createAppointment,cancelAppointment } from "../controllers/appointmentController";

const appointmentsRouter: Router = Router()

appointmentsRouter.get("/",getAppointments)

appointmentsRouter.get("/appointment",getOneAppointment)

appointmentsRouter.post("/appointment/schedule",createAppointment)

appointmentsRouter.put("/appointment/cancel",cancelAppointment)

export default appointmentsRouter