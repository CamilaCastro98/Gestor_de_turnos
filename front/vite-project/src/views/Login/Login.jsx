import axios from "axios"
import {Formik,Field,Form,ErrorMessage} from "formik"
import validateLogin from "../../helpers/validations/login"
import { useNavigate } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { login } from "../../redux/reducer"
import { selectUserId } from "../../redux/reducer"
import { useEffect } from "react"
 
const Login = () => {

    const navigate = useNavigate()
    const userLogged = useSelector(selectUserId)
    const dispatch = useDispatch()

    const handleOnSubmit = async (values) => {
        try {
           await axios.post("http://localhost:3000/users/login",values).then((res)=> {
            dispatch(login(res.data.user))
            navigate("/")
           })
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
        <div className="d-flex justify-content-center align-items-center">

        <div className="container d-flex flex-column align-items-center mt-5 mb-5">
            <h1 className="">Login!</h1>
            <Formik
            initialValues={{
                username: "",
                password: ""
            }}
            validate={validateLogin}
            onSubmit={handleOnSubmit}>
                <Form className="form">
                <div className="form-group mb-3">
                    <label className="mb-2">Username:</label>
                    <Field  type="text" 
                            name="username" 
                            placeholder="Enter username" 
                            className="form-control" ></Field>
                    <ErrorMessage name="username" className="text-danger" component="div" ></ErrorMessage>
                </div>
                <div className="form-group mb-3">
                    <label className="mb-2">Password:</label>
                    <Field  type="password" 
                            name="password" 
                            placeholder="Enter password" 
                            className="form-control" ></Field>
                    <ErrorMessage name="password" className="text-danger" component="div"></ErrorMessage>
                </div>
                <div className="d-flex mt-4 justify-content-center">
                        <button onClick={handleOnCancel} className="btn btn-md btn-outline-secondary me-2" type="button">CANCEL</button>
                        <button className="btn btn-md btn-secondary" type="submit">SUBMIT</button>
                </div>
                </Form>
            </Formik>
        </div>
        </div>
    ) 
    
}

export default Login