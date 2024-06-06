import { ReactNode } from 'react'
import ShopNowTag from '../ShopNowTag/ShopNowTag'
import styles from './SaleMonthBanner.module.scss'

interface Props {
    title: string
    subtext: string
    img: string
    children: ReactNode
}

const SaleMonthBanner = (props: Props) => {
    const bg: any[] = [styles.container]
    if (props.img == 'vegetablebg') {
        bg.push(styles.vegetablebg)
    } else if (props.img == 'meatbg') {
        bg.push(styles.meatbg)
    } else {
        bg.push(styles.fruitbg)
    }
    return (
        <div className={bg.join(' ')}>
            <div className={styles.saleInfo}>
                <span className={styles.subtext}>{props.subtext}</span>
                <span className={styles.title}>{props.title}</span>
                {props.children}
            </div>
            <ShopNowTag title='Shop Now' tag='whitebg'/>
        </div>
    )
}

export default SaleMonthBanner