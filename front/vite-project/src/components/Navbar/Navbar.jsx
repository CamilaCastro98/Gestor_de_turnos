import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <img className={styles.logo} src="../src/assets/logo.png" alt="logo" />
            <div className={styles.navbarLinks}>
                <Link to="/home">HOME</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Sign Up</Link>
                <Link to="/schedule">My Schedule</Link>
            </div>
        </nav>
    )
}

export default Navbar