import styles from './ShopNow.module.scss'
import Image from 'next/image'

const ShopNow = () => {
    return(
    <button className={styles.shopButton}>
        Shop Now
        <Image src= './Arrow.svg' alt='arrow' width={15} height={12.05} />
    </button>
    )
}
export default ShopNow
