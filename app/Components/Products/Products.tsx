import styles from './Products.module.scss'
import Image from 'next/image'

interface Props {
    title: string
    image: string
    curr: string
    discount?: string
    sale ?: string
}
const Products = (props: Props) => {
    const arr = [styles.container]
        props.sale == 'true' ? arr.push(styles.sale) : arr.push(styles.none) 
    return (
        <div className={styles.container} >
            <div className={styles.photo}>
                <Image src={props.image} alt='product' width={254} height={230} />
                <span className={arr.join(' ')}>Sale 50%</span>
            </div>
            <div className={styles.product}>
                <div className={styles.productInfo}>
                    <span className={styles.title}>{props.title}</span>
                    <span className={styles.curr}>{props.curr} <span className={styles.discount}>{props.discount}</span></span>
                    <Image src='/Rating.svg' alt='product' width={60} height={12} />

                </div>

                <div className={styles.AddToCart}>

                </div>
            </div>
        </div>
    )
}

export default Products