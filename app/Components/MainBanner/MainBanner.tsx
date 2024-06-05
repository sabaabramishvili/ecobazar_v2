import ShopNowTag from '../ShopNowTag/ShopNowTag'
import styles from './MainBanner.module.scss'
import Image from 'next/image'


const MainBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bannerInfo}>
                <div className={styles.bannerHead}>
                    <span className={styles.heading}>
                        Fresh & Healthy Organic Food
                    </span>
                </div>
                <div className={styles.saleContainer}>
                    <div className={styles.saleInfo}>
                        <span className={styles.text}>Sale Up to </span>
                        <span className={styles.saleoffButton}>30% OFF</span>
                    </div>
                    <span className={styles.shippingText}>Free shipping on all your order.</span>
                </div>
                    <ShopNowTag title='Shop Now' tag='whitebg'/>
            </div>
        </div>
    )
}

export default MainBanner

