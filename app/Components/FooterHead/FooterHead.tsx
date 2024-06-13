import FooterSearch from '../FooterSearch/FooterSearch'
import styles from './FooterHead.module.scss'
import Image from 'next/image'

const FooterHead = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <span className={styles.headText}>Subcribe our Newsletter</span>
                <span className={styles.text}>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</span>
            </div>

            <div className={styles.search}>
                <FooterSearch />
                <div className={styles.icons}>
                    <Image src='/greenfb.svg'  alt='fb' width={40} height={40}/>
                    <Image src='/twitter.svg'  alt='twitter' width={40} height={40}/>
                    <Image src='/pinterest.svg'  alt='pinterest' width={40} height={40}/>
                    <Image src='/igicon.svg'  alt='ig' width={40} height={40}/>

                </div>
            </div>
        </div>
    )
}

export default FooterHead