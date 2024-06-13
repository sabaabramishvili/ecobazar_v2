import styles from './CommentHead.module.scss'
import Image from 'next/image'

const CommentHead = () => {
    return (
        <div className={styles.container}>
            <span className={styles.text}>Client Testimonials</span>
            <div className={styles.arrows}>
                <Image src='/commentarrow.svg' alt='commentarrow' width={45} height={45} />
                <Image src='/commentarrowgreen.svg' alt='commentarrow' width={45} height={45} />

            </div>
        </div>
    )
}

export default CommentHead