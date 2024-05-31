import Image from "next/image";
import styles from './Cart.module.scss'

const Cart = () => { 
    return(
    <div className={styles.container}>
        <Image src='./Heart.svg' alt="heart" width={32} height={32} />
        <div className={styles.cart}>
            <Image src='./Bag.svg' alt="bag" width={34} height={34} />
            <div className={styles.cartTotal}>
                <span className={styles.text}> Shopping cart</span>
                <span className={styles.num}>$57.00</span>
            </div>
        </div>
    </div>
    )
}
export default Cart
