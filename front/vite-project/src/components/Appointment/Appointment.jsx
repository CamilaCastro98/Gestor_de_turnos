import formatDate from "../../helpers/formatDate"
import styles from "./Appointment.module.css"
import axios from "axios"
import { useState,useEffect } from "react"
import { useDispatch } from "react-redux"
import { cancelAppointments } from "../../redux/reducer"

const Appointment = ({date,time,state,service,id}) => {
    const newDate = formatDate(date)
    const [initialStatus,setStatus] = useState(state)
    const [statusColor, setStatusColor] = useState(styles.status)
    const dispatch = useDispatch()

    const handleCancel = () => {
        const milisecondsDay = 24 * 60 * 60 * 1000
        const today = new Date()
        const cancelDate = new Date(`${date.slice(0, 10)}T${time}:00Z`)
        if (cancelDate.getTime() - today.getTime() < milisecondsDay) {
            throw alert("Please note that you can only cancel appointments with at least one day's notice.")
        }
        axios.put(`http://localhost:3000/appointments/cancel/${id}`).then((res)=> {
            setStatus(res.data.state)
            setStatusColor(styles.statusCanceled)
            dispatch(cancelAppointments(res.data))
        })
        .catch((error) =>
      console.error(`Appointment with id ${id} couldn't be canceled`, error)
    )
    }

    useEffect(()=> {
    },[state])

    return (
        <div className={styles.data} key={id}>
            <span>{newDate}</span>
            <span>{time}</span>
            <span>{service}</span>
            <span className={statusColor}>{initialStatus}</span>
            <button onClick={handleCancel}>Cancel</button>

        </div>
    )
}

export default Appointment