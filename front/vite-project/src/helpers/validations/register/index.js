import validateBirthdate from "./validateBirthdate";
import validateDataExistence from "./validateDataExistence";
import validateDni from "./validateDni";
import validateEmail from "./validateEmail";
import validateName from "./validateName";
import validatePassword from "./validatePassword";
import validateUsername from "./validateUsername";

const validations = (values) => {
  let errors = {};

  const dataExistenceErrors = validateDataExistence(values);
  const nameErrors = validateName(values);
  const emailErrors = validateEmail(values);
  const usernameErrors = validateUsername(values);
  const birthdateErrors = validateBirthdate(values);
  const dniErrors = validateDni(values)
  const passwordErrors = validatePassword(values)

  errors = {
    ...errors,
    ...dataExistenceErrors,
    ...nameErrors,
    ...emailErrors,
    ...usernameErrors,
    ...birthdateErrors,
    ...dniErrors,
    ...passwordErrors
  };
  return errors;
};

export default validations;
