import styles from './FooterList.module.scss'

interface Props {
    title: string
    first: string
    second: string
    third: string
    fourth: string
}
const FooterList = (props: Props) => {
    return (
        <div className={styles.container}>
            <span className={styles.head}>{props.title}</span>
            <div className={styles.list}>
                <span className={styles.text}>{props.first}</span>
                <span className={styles.text}>{props.second}</span>
                <span className={styles.text}>{props.third}</span>
                <span className={styles.text}>{props.fourth}</span>
            </div>
        </div>
    )
}

export default FooterList