import styles from './FruitBannerInfo.module.scss'

const FruitBannerInfo = () => {
    return(
        <div className={styles.container}>
            <span className={styles.text}>Up to</span>
            <span className={styles.num}>64% Off</span>
        </div>
    )
}

export default FruitBannerInfo