import Card from "../Card/Card"
import styles from "./Courses.module.css"
import courses from "../../helpers/courses"

const Courses = () => {
    return (
        <div className={styles.coursesContainer}>
            <h1 className={styles.coursesTitle}>Your path to fitness: Our courses</h1>
             <div className={styles.cardList}>
                {courses.map(course => {
                    return <Card title={course.title} description={course.description} img={course.img}/>
                })}
             </div>
        </div>
    )
}

export default Courses