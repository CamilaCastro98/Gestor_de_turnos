import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav>
            <img className={styles.logo} src="../src/assets/logo.png" alt="logo" />
            <div className={styles.navbarLinks}>
                <a href="">About</a>
                <a href="">Login</a>
                <a href="">Sign Up</a>
            </div>
        </nav>
    )
}

export default Navbar