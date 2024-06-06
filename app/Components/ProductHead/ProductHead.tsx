import ShopNowTag from '../ShopNowTag/ShopNowTag'
import styles from './ProductHead.module.scss'

interface Props {
    name : string
}
 const ProductHead = (props : Props) => {
    return(
        <div className={styles.container}>
            <span className={styles.text}>{props.name}</span>
            <ShopNowTag title='View All'/>
        </div>
    )
 }

 export default ProductHead