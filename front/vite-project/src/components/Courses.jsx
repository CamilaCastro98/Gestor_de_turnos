import Card from "../components/Card"
import styles from "../../styles/Courses.module.css"

const Courses = () => {
    return (
        <div className={styles.coursesContainer}>
            <h1>Your path to fitness: Our courses</h1>
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