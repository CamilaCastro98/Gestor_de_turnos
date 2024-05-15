import styles from "./HeaderTitle.module.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUserName } from "../../../redux/reducer"

const HeaderTitleLogged = () => {
    const userName = useSelector(selectUserName)

    return (
        <div className={styles.container}>
             <h1 className={styles.headerTitle} >Welcome, <span>{userName}!</span> </h1>
             <p className={styles.headerP}>Let's workout! Book now</p>
             <div className={styles.headerButtons}>
                <Link to="/schedule" className={styles.login}>My schedule</Link>
             </div>

        </div>
    )
}

export default HeaderTitleLogged