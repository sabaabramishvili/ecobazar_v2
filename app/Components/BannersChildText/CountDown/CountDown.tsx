import styles from './CountDown.module.scss'

const CountDown = () => {
    return(
        <div className={styles.container}>
            <div className={styles.time}>
                <span className={styles.num}>00</span>
                <span className={styles.text}>days</span>
            </div>
            <span className={styles.doubleDot}>:</span>
            <div className={styles.time}>
                <span className={styles.num}>02</span>
                <span className={styles.text}>hours</span>
            </div>
            <span className={styles.doubleDot}>:</span>
            <div className={styles.time}>
                <span className={styles.num}>18</span>
                <span className={styles.text}>mins</span>
            </div>
            <span className={styles.doubleDot}>:</span>
            <div className={styles.time}>
                <span className={styles.num}>46</span>
                <span className={styles.text}>secs</span>
            </div>
        </div>
    )
}

export default CountDown