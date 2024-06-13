import styles from './Comment.module.scss'
import Image from 'next/image'



type CommentProp = {

    image: string,
    description: string
    firstname: string
}
const Comment = (props: CommentProp) => {
    return (
        <div className={styles.container}>
            <Image src='/doublequote.svg' alt='quote' width={32} height={26} />
            <p className={styles.text}>
                {props.description}
            </p>
            <div className={styles.customer}>
                <div className={styles.customerInfo}>
                    <Image src={props.image} alt='customer' width={56} height={56} />
                    <div className={styles.customerText}>
                        <span className={styles.name}>{props.firstname}</span>
                        <span className={styles.subtext}>Customer</span>
                    </div>
                </div>
                <div className={styles.rating}>
                    <Image src='/onestar.svg' alt='onestar' width={20} height={20} />
                    <Image src='/onestar.svg' alt='onestar' width={20} height={20} />
                    <Image src='/onestar.svg' alt='onestar' width={20} height={20} />
                    <Image src='/onestar.svg' alt='onestar' width={20} height={20} />
                    <Image src='/onestar.svg' alt='onestar' width={20} height={20} />
                </div>
            </div>
        </div>
    )
}


export default Comment