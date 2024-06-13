import styles from './Instagram.module.scss'
import Image from 'next/image'
const Instagram = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.head}>Follow us on Instagram</span>
            </div>
            <div className={styles.container}>
                <Image src='/tomato.png' alt='tomato'  width={200} height={200}/>
                <Image src='/instagram.png' alt='instagram'  width={200} height={200}/>
                <Image src='/leaf.png' alt='leaf'  width={200} height={200}/>
                <Image src='/bulgalur.png' alt='bulgalur'  width={200} height={200}/>
                <Image src='/petrushka.png' alt='petrushka'  width={200} height={200}/>
                <Image src='/lemon.png' alt='lemon'  width={200} height={200}/>
            </div>
        </div>
    )
}

export default Instagram