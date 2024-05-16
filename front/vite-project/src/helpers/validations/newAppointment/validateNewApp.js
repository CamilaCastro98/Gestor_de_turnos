const validateNewApp = (values)=> {
    let errors = {}
    const {date,time,service} = values
    const today = new Date()
    const newDate = new Date(`${date}T${time}`)
    const justDate = new Date(date)
    const newTime = parseInt(time.slice(0,2))

    if (!date || (newDate < today)) {
        errors.date = "Please enter a future date"
    }
    if (newDate.getDay() === 5 || newDate.getDay() === 6) {
        errors.date = "No service on weekends"
    }

    if (!time || newTime < 9 || newTime > 21) {
        errors.time = "Please enter a valid time between 9am and 9pm"
    }
    if (!service) {
        errors.service = "Please choose a service"
    }
    return errors
}

export default validateNewApp