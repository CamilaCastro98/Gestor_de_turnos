import {mySchedule} from "../helpers/mySchedule"
import Appointment from "../components/Appointment/Appointment"
import {useState} from 'react'
import styles from "./MySchedule.module.css"

const MySchedule = () => {
    const [appointments, setAppointments] = useState(mySchedule)

    return (
        <div className={styles.appsContainer}>
            <h1>My Appointments</h1>
            {appointments.map(app => {
                return <Appointment key={app.id} {...app}/>
            })}

        </div>
    )

}

export default MySchedule