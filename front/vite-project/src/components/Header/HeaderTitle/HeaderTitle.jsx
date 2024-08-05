import styles from "./HeaderTitle.module.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUserId } from "../../../redux/reducer"
import HeaderTitleLogged from "./HeaderTitleLogged"

const HeaderTitle = () => {
    const userId = useSelector(selectUserId)
    const isUserLogged = !!userId

    return (
        <>
      {isUserLogged ?  <HeaderTitleLogged/> : (<div className={styles.container}>
             <h1 className={styles.headerTitle} >Turn up the <span>fitness</span> <br /> <span>Schedule</span> your success</h1>
             <p className={styles.headerP}>Your agenda, your time, your way</p>
             <div className={styles.headerButtons}>
                <Link to="/login" className={styles.login}>Login</Link>
                <p className={styles.notMember}>Not a member yet? <span><Link to="/register" className={styles.signup}>Sign Up</Link></span></p>
             </div>

        </div>)}
        </>
    )
}

export default HeaderTitle