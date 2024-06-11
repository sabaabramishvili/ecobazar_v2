import Date from '../Date/Date'
import ShopNowTag from '../ShopNowTag/ShopNowTag'
import styles from './News.module.scss'
import Image from 'next/image'
interface Props {
    time: string
    title: string
    text: string
    month : string
}

const News = (props: Props) => {
    const bg: any[] = []

    if (props.title == 'orangebg') {
        bg.push(styles.orangebg)
    } else if (props.title == 'eggbg') {
        bg.push (styles.eggbg)
    }else if (props.title == 'saladbg') {
        bg.push (styles.saladbg)
    }

    return (
        <div className={styles.container}>
            <div className={bg.join(' ')}>
                <div className={styles.date}>
                    <Date time={props.time} month={props.month} />
                </div>
            </div>
            <div className={styles.newsInside}>
                <div className={styles.newsInfo}>
                    <div className={styles.tags}>
                        <div className={styles.tag}>
                            <Image src='/tag.svg' alt='tag' width={18} height={18} />
                            <span className={styles.text}>Food</span>
                        </div>
                        <div className={styles.tag}>
                            <Image src='/user.svg' alt='user' width={18} height={18} />
                            <span className={styles.text}>By Admin</span>
                        </div>
                        <div className={styles.tag}>
                            <Image src='/comment.svg' alt='comment' width={18} height={18} />
                            <span className={styles.text}>65 Comments</span>
                        </div>
                    </div>
                    <p className={styles.paragraph}>{props.text}</p>
                </div>
                <ShopNowTag title='Read More' />
            </div>
        </div>
    )
}

export default News