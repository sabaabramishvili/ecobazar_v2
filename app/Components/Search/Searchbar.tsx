import styles from './Searchbar.module.scss'
import Image from 'next/image'
const Search = () => {
    return (
        <div className={styles.search__wrapper}>
            <div className={styles.searchbar__wrapper}>
                <label htmlFor='searchbar'><Image src='Search.svg' alt='searchbar' width={20} height={20} /></label>
                <input type="search" placeholder="Search" id="searchbar" className={styles.searchbarinput} />
            </div>
            <input type="submit" value="Search" className={`${styles.submitinput} ${styles.text}`} />
        </div>
    )
}
export default Search