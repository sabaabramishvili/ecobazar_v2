import ShopIcon from '../SVG/ShopIcon'
import styles from './ShopNowTag.module.scss'
import Image from 'next/image'

interface Props {
    title: string
    tag?: string
    img?: string
}

const ShopNowTag = (props: Props) => {

        const button = [styles.container]
        if (props.tag == 'whitebg') {
            button.push(styles.whitebg)
        } else if (props.tag == 'greenbg') {
            button.push(styles.greenbg)
        }
    return (
        <button className={button.join(' ')}>
            <span className={styles.text}>{props.title}</span>
            <ShopIcon />
        </button>
    )
}
export default ShopNowTag