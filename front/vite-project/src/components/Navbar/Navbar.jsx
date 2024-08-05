import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserId } from "../../redux/reducer";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const userLogged = useSelector(selectUserId);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div className={styles.smNav}>
                <Link to="/"><img className={styles.logo} src="../assets/logo.png" alt="logo" /></Link>
                <IoMdMenu className={styles.menuIcon} onClick={toggleMenu} />
            </div>
            <div className={`${styles.navbarLinks} ${menuOpen ? '' : styles.hide }`}>
                <div className={styles.links}>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                    {userLogged && <Link to="/schedule">My Schedule</Link>}
                    {!userLogged && <Link to="/login">Login</Link>}
                    {!userLogged && <Link to="/register" className={styles.register}>Sign Up</Link>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
