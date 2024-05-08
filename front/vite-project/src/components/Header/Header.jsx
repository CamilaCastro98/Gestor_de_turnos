import HeaderTitle from "./HeaderTitle/HeaderTitle"
import HeaderImg from "./HeaderImg/HeaderImg"
import styles from "./Header.module.css"

const Header = () => {
    return (
    <div className={styles.container}>
        <HeaderImg/>
        <HeaderTitle/>
    </div>
    )
}

export default Header