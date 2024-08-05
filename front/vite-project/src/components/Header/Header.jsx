import HeaderTitle from "./HeaderTitle/HeaderTitle"
import styles from "./Header.module.css"

const Header = () => {
    return (
    <div className={styles.container}>
        <HeaderTitle/>
    </div>
    )
}

export default Header