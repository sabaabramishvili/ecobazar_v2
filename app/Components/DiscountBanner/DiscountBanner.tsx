import ShopNowTag from '../ShopNowTag/ShopNowTag'
import styles from './DiscountBanner.module.scss'

const DiscountBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bannerInside}>
                <div className={styles.bannerInfo}>
                    <div className={styles.bannerHead}>
                        <span className={styles.title}>summer sale</span>
                        <span className={styles.num}>37%<span className={styles.numtext}>OFF</span></span>
                    </div>
                    <span className={styles.text}>Free on all your order, Free Shipping and  30 days money-back guarantee</span>
                </div>
                <ShopNowTag  title='Shop Now' tag='greenbg'/>
            </div>
        </div>
    )
}

export default DiscountBanner