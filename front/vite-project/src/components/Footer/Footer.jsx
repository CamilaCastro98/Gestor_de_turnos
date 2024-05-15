import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <>
        <div className={styles.infoContainer}>
            <div>
                <h3>Contact us</h3>
                <p>Email: reactFitness@mail.com</p>
                <p>Phone: +123456789</p>
                <p>Address: 1234 Maple Street, Springfield, USA</p>
            </div>
            <div>
                <h3>Follow us</h3>
                <img className={styles.socials} src="../src/assets/socials.png" alt="" />
            </div>
        </div>
        <p>© 2024 React Fitness. All rights reserved.</p>
        </>
    )
}

export default Footer