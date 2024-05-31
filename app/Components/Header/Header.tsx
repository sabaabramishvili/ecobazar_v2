import Cart from '../Cart/Cart'
import Search from '../Search/Searchbar'
import styles from './Header.module.scss'
import Image from 'next/image'
const Header = () => {
    return (
        <div className={styles.container}>
            <Image src='./Logo.svg' alt='logo' width={183} height={38} />
            <Search />
            <Cart />
        </div>
    )
}
export default Header