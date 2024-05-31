import ArrowIcon from '../SVG/ArrowIcon'
import styles from './Navigation.module.scss'
import Image from 'next/image'
const Navigation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.navbutton}>
                    <span className={styles.text}>Home</span>
                    <ArrowIcon />
                </div>
                <div className={styles.navbutton}>
                    <span className={styles.text}>Shop</span>
                    <ArrowIcon />
                </div>
                <div className={styles.navbutton}>
                    <span className={styles.text}>Pages</span>
                    <ArrowIcon />
                </div>
                <div className={styles.navbutton}>
                    <span className={styles.text}>Blog</span>
                    <ArrowIcon />
                </div>
                <div className={styles.navbutton}>
                    <span className={styles.text}>About Us</span>
                </div>
                <div className={styles.navbutton}>
                    <span className={styles.text}>Contact Us</span>
                </div>
            </div>
            <div className={styles.call}>
                <Image src='./PhoneCall 1.svg' alt='phonecall' width={28} height={28}/>
                <span className={styles.num}>(219) 555-0114</span>
            </div>
        </div>
    )
}
export default Navigation