import axios from "axios"
import {Formik,Field,Form,ErrorMessage} from "formik"
import validations from "../../helpers/validations/register"
import "./Register.css"
import { useNavigate } from "react-router-dom"


const Register = () => {

    const navigate = useNavigate()

    const handleOnSubmit = async (values) => {
        try {
           await axios.post("http://localhost:3000/users/register",values)
           navigate("/")
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

    const handleOnCancel = () => {
        navigate("/")
    }

    return (
        <div className="container mt-5 mb-5">
                <h1 className="mb-5">Register here!</h1>
            <Formik
            initialValues={{
                name: "",
                email: "",
                birthdate: "",
                nDni: "",
                username: "",
                password: ""
            }}
            validate={validations}
            onSubmit={(values, { setSubmitting }) => {
                handleOnSubmit(values);
                setSubmitting(false);
              }}>
                <Form className="form">
                <div className="form-group mb-3">
                    <label className="mb-2">Name:</label>
                    <Field  type="text" 
                            name="name" 
                            placeholder="Jane Doe"
                            className="form-control" ></Field>
                    <ErrorMessage name="name" className="text-danger" component="div"></ErrorMessage>
                </div>
                <div className="form-group mb-3">
                    <label className="mb-2">Email:</label>
                    <Field  type="text" 
                            name="email" 
                            placeholder="email@example.com" 
                            className="form-control"></Field>
                    <ErrorMessage name="email" className="text-danger" component="div"></ErrorMessage>
                </div>
                <div className="form-group mb-3">
                    <label className="mb-2">Birthdate:</label>
                    <Field  type="text" 
                            name="birthdate" 
                            placeholder="YYYY-MM-DD"
                            className="form-control" ></Field>
                    <ErrorMessage name="birthdate" className="text-danger" component="div"></ErrorMessage>
                </div>
                <div className="form-group mb-3">
                    <label className="mb-2">Dni:</label>
                    <Field  type="number" 
                            name="nDni" 
                            placeholder="12345678" 
                            className="form-control"></Field>
                    <ErrorMessage name="nDni" className="text-danger" component="div"></ErrorMessage>
                </div>
                <div className="form-group mb-3">
                    <label className="mb-2">Username:</label>
                    <Field  type="text" 
                            name="username" 
                            placeholder="user123" 
                            className="form-control"></Field>
                    <ErrorMessage name="username" className="text-danger" component="div"></ErrorMessage>
                </div>
                <div className="form-group mb-3">
                    <label className="mb-2">Password:</label>
                    <Field  type="password" 
                            name="password" 
                            placeholder="*******" 
                            className="form-control"></Field>
                    <ErrorMessage name="password" className="text-danger" component="div"></ErrorMessage>
                </div>
                <div className="d-flex mt-4 justify-content-center">
                        <button onClick={handleOnCancel} className="btn btn-lg btn-outline-secondary me-2" type="button">CANCEL</button>
                        <button className="btn btn-lg btn-secondary" type="submit">SUBMIT</button>
                </div>
                <div className="text-center mt-3">
                         <p>Already have an account? <a href="/login">Login</a></p>
                </div>
                </Form>
            </Formik>
        </div>
    ) 
    
}

export default Register