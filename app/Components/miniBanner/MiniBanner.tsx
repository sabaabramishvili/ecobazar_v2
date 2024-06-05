import ShopNowTag from '../ShopNowTag/ShopNowTag'
import styles from './MiniBanner.module.scss'

const MiniBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bannerInfo}>
                <div className={styles.bannerTextt}>
                    <span className={styles.text}>Best Deal</span>
                    <span className={styles.maintext}>Special Product Deal of the month</span>
                </div>
                <ShopNowTag title='Shop Now' />
            </div>
        </div>
    )
}
export default MiniBanner