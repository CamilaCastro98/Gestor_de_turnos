const Appointment = ({date,time,status,service,id}) => {
    return (
        <div key={id}>
            <span>Date: {date}</span>
            <span>Time: {time}</span>
            <span>Service: {service}</span>
            <span>Status: {status}</span>

        </div>
    )
}

export default Appointment