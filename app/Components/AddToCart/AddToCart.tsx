import styles from './AddToCart.module.scss'
import Image from 'next/image'
 const AddToCart = () => {
    return(
        <button className={styles.button}>
            Add to  Cart
            <Image src ='/addtocartbag.svg' alt = 'bag' width={15} height={15} />
        </button>
    )
 }
 export default AddToCart