import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Status } from "../interfaces/IAppointment"

@Entity()
export class Appointment {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column()
    time: string

    @Column()
    status: Status

    @ManyToOne(()=> User,(user)=> user.history)
    userId: number
}