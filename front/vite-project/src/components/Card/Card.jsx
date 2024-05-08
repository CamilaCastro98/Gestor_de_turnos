import styles from "./Card.module.css"

const Card = () => {
    return (
        <div className={styles.cardContainer}>
            <h2>COURSE</h2>
            <img src="../src/assets/course.jpg" alt="" />
        </div>
    )
}

export default Card