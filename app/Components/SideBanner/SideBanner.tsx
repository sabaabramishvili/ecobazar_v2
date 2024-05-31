import ShopNowTag from '../ShopNowTag/ShopNowTag'
import styles from './SideBanner.module.scss'
import Image from 'next/image'

const SideBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bannerInfo}>
                <div className={styles.saleWrap}>
                    <div className={styles.head}>
                        <span className={styles.summerSale}>summer sale</span>
                        <span className={styles.heading}>75% OFF</span>
                    </div>
                        <span className={styles.subtext}>Only Fruit & Vegetable</span>
                </div>
                <ShopNowTag title ='Shop Now'/>
            </div>
        </div>
    )
}
export default SideBanner