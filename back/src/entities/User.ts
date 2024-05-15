import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Credential } from "./Credential"
import { Appointment } from "./Appointment"

@Entity({
    name: "users"
})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    name: string

    @Column({nullable: true})
    profilePicture: string

    @Column()
    email: string

    @Column()
    birthdate: Date

    @Column()
    nDni: number

    @Column()
    active: boolean

    @OneToOne(()=> Credential)
    @JoinColumn()
    credentialsId: Credential

    @OneToMany(()=> Appointment, (appointment) => appointment.user)
    history: Appointment[]
}