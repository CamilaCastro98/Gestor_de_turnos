import styles from "./Contact.module.css"

const Contact = () => {
    return (
        <div className={styles.staticContainer}>
                <h1>Contact us!</h1>
                <p>Email: reactFitness@mail.com</p>
                 <p>Phone: +123456789</p>
                 <p>Address: 1234 Maple Street, Springfield, USA</p>
        </div>
    )
}

export default Contact