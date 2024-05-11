const validatePassword = (values) => {
    const {password} = values
    const errors = {}

    if (password.length < 5) {
        errors.password = "Password must be at least 5 characters long"
    }

    const regexPassword = /^(?=.*[A-Z])(?=.*\d).+/
    if (!(regexPassword.test(password))) {
        errors.password = "Password must contain at least one uppercase letter and one digit"
    }
    
    return errors
}

export default validatePassword