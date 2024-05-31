import styles from './TopHeader.module.scss'
import Image from 'next/image'
const TopHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topLeft}>
                <Image src='./MAP.svg' alt='vector' width={15} height={18} />
                <span className={styles.text}>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
            </div>
            <div className={styles.topRight}>
                <div className={styles.currency}>
                    <div className={styles.curr}>
                        <span className={styles.text}>ENG</span>
                        <Image src='/Group.svg' alt='group' width={7} height={3.5} />
                    </div>

                    <div className={styles.curr}>
                        <span className={styles.text}>USD</span>
                        <Image src='/Group.svg' alt='group' width={7} height={3.5} />
                    </div>
                </div>
                <div className={styles.border}></div>
                <div className={styles.currency}>
                    <div className={styles.reg}>
                        <span className={styles.text}>Sign In</span>
                        <span className={styles.text}>/</span>
                        <span className={styles.text}>Sign Up</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopHeader