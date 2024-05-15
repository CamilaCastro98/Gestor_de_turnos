import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUser } from "../../redux/reducer"

const Navbar = () => {

    const userLogged = useSelector(selectUser)

    return (
        <nav>
            <Link to="/"><img className={styles.logo} src="../src/assets/logo.png" alt="logo" /></Link>
            <div className={styles.navbarLinks}>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            {userLogged && <Link to="/schedule">My Schedule</Link>}
                <Link to="/login">Login</Link>
                <Link to="/register">Sign Up</Link>
            </div>
        </nav>
    )
}

export default Navbar