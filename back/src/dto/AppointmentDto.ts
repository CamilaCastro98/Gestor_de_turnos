import { Service } from "../interfaces/IAppointment"

interface AppointmentDto {
    date: string,
    time: string,
    service: Service,
    userId: number
}

export default AppointmentDto