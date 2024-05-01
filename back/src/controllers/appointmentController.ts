import { Request, Response } from "express"


export const getAppointments = async (req: Request,res: Response) => {
    console.log("Controlador que muestra los turnos")
}

export const getOneAppointment = async (req: Request,res: Response) => {
    console.log("Controlador que muestra turno específico")
}

export const createAppointment = async (req: Request,res: Response) => {
    console.log("Controlador que agenda un turno")
}

export const cancelAppointment = async (req: Request,res: Response) => {
    console.log("Controlador que cancela un turno")
}