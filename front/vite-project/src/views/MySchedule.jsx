import {mySchedule} from "../helpers/mySchedule"
import Appointment from "../components/Appointment/Appointment"
import {useState} from 'react'

const MySchedule = () => {
    const [appointments, setAppointments] = useState(mySchedule)

    return (
        <>
            {appointments.map(app => {
                return <Appointment date={app.date} time={app.time} status={app.status}/>
            })}

        </>
    )

}

export default MySchedule