import styles from "../../styles/HeaderTitle.module.css"

const HeaderTitle = () => {
    return (
        <div className={styles.container}>
             <h1>Turn up the fitness <br /> Schedule your success</h1>
             <p>Your only limit is you. Start now!</p>
             <div>
                <button>Login</button>
                <button>Sign Up</button>
             </div>

        </div>
    )
}

export default HeaderTitle