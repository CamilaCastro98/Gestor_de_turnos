import styles from "../../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <nav>
            <img src="" alt="logo" />
            <div className={styles.navbarLinks}>
                <a href="">About</a>
                <a href="">Login</a>
                <a href="">Sign Up</a>
            </div>
        </nav>
    )
}

export default Navbar