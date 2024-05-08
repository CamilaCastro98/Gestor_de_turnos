import Card from "../Card/Card"
import styles from "./Courses.module.css"

const Courses = () => {
    return (
        <div className={styles.coursesContainer}>
            <h1 className={styles.coursesTitle}>Your path to fitness: Our courses</h1>
             <div className={styles.cardList}>
                < Card/>
                < Card/>
                < Card/>
                < Card/>
             </div>
        </div>
    )
}

export default Courses