import styles from "./Card.module.css"

const Card = ({title,description,img}) => {
    return (
        <div className={styles.cardContainer}>
            <h2>{title}</h2>
            <img src={img} alt={title} />
            <div>{description}</div>
        </div>
    )
}

export default Card