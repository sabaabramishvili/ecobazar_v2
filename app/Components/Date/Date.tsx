import styles from './Date.module.scss'

interface Props {
    time : any
    month : any
}
const Date = (props : Props) => {
    return(
        <div className={styles.container}>
            <span className={styles.time}>{props.time}</span>
            <span className={styles.month}>{props.month}</span>
        </div>
    )
}

export default Date