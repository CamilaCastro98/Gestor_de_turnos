import HeaderTitle from "./HeaderTitle"
import HeaderImg from "./HeaderImg"
import styles from "../../styles/Header.module.css"

const Header = () => {
    return (
    <div className={styles.container}>
        <HeaderImg/>
        <HeaderTitle/>
    </div>
    )
}

export default Header