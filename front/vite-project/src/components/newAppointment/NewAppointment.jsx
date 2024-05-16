import {Formik,Field,Form,ErrorMessage} from "formik"
import styles from "./NewAppointment.module.css"
import axios from "axios"
import { useSelector } from "react-redux"
import { selectUserId } from "../../redux/reducer"
import validateNewApp from "../../helpers/validations/newAppointment/validateNewApp"


const NewAppointment = ({ onData }) => {

    const userLogged = useSelector(selectUserId)

    const sendUpdate = (id) => {
        onData(id);
      }

    const handleOnSubmit = async(values) => {
        try {
            await axios.post("http://localhost:3000/appointments/schedule",{...values,userId:userLogged})
            sendUpdate(values.id)
            alert("Appointment successfully created!")
        } catch(error) {
            if (error.response && error.response.data && error.response.data.error) {
                alert("Error: " + error.response.data.error);
            } else if (error.message) {
                alert("Error: " + error.message); 
            } else {
                alert("An unexpected error occurred"); 
            }
        }
    }

    return (
        <Formik
            initialValues={{
                date: "",
                time: "",
                service: ""
            }}
            validate={validateNewApp}
            onSubmit={(values, { setSubmitting }) => {
                handleOnSubmit(values);
                setSubmitting(false);
              }}
            >
                <Form className={styles.newForm}>
                    <Field  type="date" 
                            name="date"
                            className="form-control" ></Field>
                    <ErrorMessage name="date" className="text-danger" component="div" ></ErrorMessage>
                    <Field  type="time" 
                            name="time" 
                            step="300"
                            min="09:00"
                            max="21:00"
                            className="form-control" ></Field>
                    <ErrorMessage name="time" className="text-danger" component="div"></ErrorMessage>
                        <Field as="select" name="service" className="form-control">
                            <option value="">Select a service</option>
                            <option value="Yoga">Yoga</option>
                            <option value="Strength Training">Strength Training</option>
                            <option value="Outdoor Adventure">Outdoor Adventure</option>
                            <option value="Free Workout">Free Workout</option>
                        </Field>
                        <ErrorMessage name="service" className="text-danger" component="div" />
                        <button type="submit">Submit</button>
                </Form>
            </Formik>
    )
}

export default NewAppointment