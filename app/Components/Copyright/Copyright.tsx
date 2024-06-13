import styles from './Copyright.module.scss'
import Image from 'next/image'
const Copyright = () => {
    return(
        <div className={styles.container}>
            <span className={styles.text}>Ecobazar eCommerce © 2021. All Rights Reserved</span>
            <div className={styles.cards}>
                <Image src='/applepay.svg' alt='applepay' width={45} height={31.8} />
                <Image src='/visa.svg' alt='visa' width={45} height={31.8} />
                <Image src='/discover.svg' alt='discover' width={45} height={31.8} />
                <Image src='/mastercard.svg' alt='mastercard' width={45} height={31.8} />
                <Image src='/secure.svg' alt='secure' width={65} height={32} />
            </div>
        </div>
    )
}

export default Copyright