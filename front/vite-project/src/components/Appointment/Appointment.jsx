import formatDate from "../../helpers/formatDate"
import styles from "./Appointment.module.css"
import axios from "axios"
import { useState,useEffect } from "react"

const Appointment = ({date,time,state,service,id}) => {
    const newDate = formatDate(date)
    const [initialStatus,setStatus] = useState(state)
    const [statusColor, setStatusColor] = useState(styles.status)

    const handleCancel = () => {
        axios.put(`http://localhost:3000/appointments/cancel/${id}`).then((res)=> {
            setStatus(res.data.state)
            setStatusColor(styles.statusCanceled)})
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