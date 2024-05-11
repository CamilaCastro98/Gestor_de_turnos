const validateName = (values) => {
    const { name } = values
    const errors = {}

    if(name.length < 5 || name.length > 35) {
        errors.name = "Name must be between 5 and 35 characters"
    }

    const regexName = /^[a-zA-Z\s]+$/
    if (name.length && !regexName.test(name)) {
        errors.name = "Name can only contain letters and spaces"
    }
    return errors
}

export default validateName