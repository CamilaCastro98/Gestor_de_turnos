const validateEmail = (values) => {
    const {email} = values
    const errors = {}

    const regexMail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.(com|COM)$/

    if (!regexMail.test(email)) {
        errors.email = "Please enter a valid email address"
    }

    return errors
    
}

export default validateEmail