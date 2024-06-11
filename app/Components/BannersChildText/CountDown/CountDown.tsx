import styles from './CountDown.module.scss'

interface Props {
    days: string
    hours: string
    mins: string
    secs: string
    style: string
}

const CountDown = (props: Props) => {
        return (
            <div className={`${styles.container} ${styles[props.style]}`}>
                <div className={styles.time}>
                    <span className={styles.num}>{props.days}</span>
                    <span className={styles.text}>days</span>
                </div>
                <span className={styles.doubleDot}>:</span>
                <div className={styles.time}>
                    <span className={styles.num}>{props.hours}</span>
                    <span className={styles.text}>hours</span>
                </div>
                <span className={styles.doubleDot}>:</span>
                <div className={styles.time}>
                    <span className={styles.num}>{props.mins}</span>
                    <span className={styles.text}>mins</span>
                </div>
                <span className={styles.doubleDot}>:</span>
                <div className={styles.time}>
                    <span className={styles.num}>{props.secs}</span>
                    <span className={styles.text}>secs</span>
                </div>
            </div>
        )
}

export default CountDown