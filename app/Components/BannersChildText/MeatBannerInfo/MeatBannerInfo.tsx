import styles from './MeatBannerInfo.module.scss'

const MeatBannerInfo = () => {
    return(
        <div className={styles.container}>
            <span className={styles.text}>Started at</span>
            <span className={styles.num}>$79.99</span>
        </div>
    )
}

export default MeatBannerInfo