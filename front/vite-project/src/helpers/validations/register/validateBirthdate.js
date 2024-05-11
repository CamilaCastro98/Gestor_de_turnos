const validateBirthdate = (values) => {
    const { birthdate } = values;
    const errors = {};

    if (isNaN(Date.parse(birthdate))) {
        errors.birthdate = "Please enter a valid date";
    }

    const todayDate = new Date();
    const userBirth = new Date(birthdate);
    const millisecondsInAYear = 1000 * 60 * 60 * 24 * 365.25;
    if ((todayDate.getTime() - userBirth.getTime()) / millisecondsInAYear < 16) {
        errors.birthdate = "You must be at least 16 years old to sign up";
    }

    return errors;
};

export default validateBirthdate;