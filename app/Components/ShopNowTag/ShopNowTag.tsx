import styles from './ShopNowTag.module.scss'
import Image from 'next/image'

interface Props {
    title : string
}
const ShopNowTag = (props : Props) => {
    return(
        <div className={styles.container}>
            <span className={styles.text}>{props.title}</span>
            <Image src='./Arrow.svg' alt='arrow' width={15} height={12.05} />
        </div>
    )
}
export default ShopNowTag