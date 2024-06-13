import FooterList from '../FooterList/FooterList'
import styles from './Footer.module.scss'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerInfo}>
                <Image src='/footerlogo.svg' alt='footerlogo' width={183} height={38} />
                <p className={styles.text}>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                <div className={styles.contactus}>
                    <span className={styles.contact}>(219) 555-0114</span>
                    <span className={styles.article}>or</span>
                    <span className={styles.contact}>Proxy@gmail.com</span>
                </div>
            </div>
            <FooterList title='My Account' first='My Account' second='Order History' third='Shoping Cart' fourth='Wishlist' />
            <FooterList title='Helps' first='Contact' second='Faqs' third='Terms & Condition' fourth='Privacy Policy' />
            <FooterList title='Proxy' first='About' second='Shop' third='Product' fourth='Track Order' />
            <FooterList title='Categories' first='Fruit & Vegetables' second='Meat & Fish' third='Bread & Bakery' fourth='Beauty & Health' />

        </div>
    )
}

export default Footer