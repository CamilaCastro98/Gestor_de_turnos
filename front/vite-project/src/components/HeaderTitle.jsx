import styles from "../../styles/HeaderTitle.module.css"

const HeaderTitle = () => {
    return (
        <div className={styles.container}>
             <h1 className={styles.headerTitle} >Turn up the fitness <br /> Schedule your success</h1>
             <p className={styles.headerP}>Your only limit is you. Start now!</p>
             <div className={styles.headerButtons}>
                <button className={styles.login}>Login</button>
                <button className={styles.signup}>Sign Up</button>
             </div>

        </div>
    )
}

export default HeaderTitle