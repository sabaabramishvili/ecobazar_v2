import AddToCart from '../Components/AddToCart/AddToCart'
import CountDown from '../Components/BannersChildText/CountDown/CountDown'
import SaleButton from '../Components/SaleButton/SaleButton'
import styles from './HotSale.module.scss'
import Image from 'next/image'

const HotSale = () => {
    return (
        <div className={styles.container}>
            <div className={styles.photoContainer}>
                <Image src='/bigapple.png' alt='big apple' width={525} height={446} />
                <div className={styles.saleButtons}>
                    <SaleButton title='Sale 50%' type='normal' />
                    <SaleButton title='Best Sale' type='best' />
                </div>
                <div className={styles.carting}>
                    <Image src='/cartheart.svg' alt='big apple' width={46} height={46} />
                    <AddToCart />
                    <Image src='/eye.svg' alt='big apple' width={46} height={46} />
                </div>
            </div>
            <div className={styles.productInfo}>
                <div className={styles.aboutProduct}>
                    <span className={styles.text}>Chinese cabbage</span>
                    <span className={styles.curr}>$12.00 <span className={styles.saleCurr}>$24.00</span></span>
                    <div className={styles.rating}>
                        <Image src='/onestar.svg' alt='onestar' width={18} height={18} />
                        <Image src='/onestar.svg' alt='onestar' width={18} height={18} />
                        <Image src='/onestar.svg' alt='onestar' width={18} height={18} />
                        <Image src='/onestar.svg' alt='onestar' width={18} height={18} />
                        <Image src='/onestar.svg' alt='onestar' width={18} height={18} />
                        <span className={styles.ratingText}>(524 Feedback)</span>
                    </div>
                </div>
                <div className={styles.countDown}>
                    <span className={styles.countText}>Hurry Up! Offer ends In:</span>
                    <CountDown  days='01' hours='23' mins='34' secs='57' style='black'/>
                </div>
            </div>
        </div>
    )
}

export default HotSale