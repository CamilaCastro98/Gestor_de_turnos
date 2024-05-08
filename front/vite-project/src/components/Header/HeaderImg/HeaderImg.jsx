import styles from "./HeaderImg.module.css"

const HeaderImg = () => {
    return (
        <div>
             <img className={styles.imgHeader} src="../src/assets/gym.png" alt="headerImg" />
        </div>
    )
}

export default HeaderImg