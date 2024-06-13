import styles from './FooterSearch.module.scss'

const FooterSearch = () => {
    return (
                <div className={styles.container}>
                    <div className={styles.searchbar}>
                        <label htmlFor="searchbar"></label>
                        <input type="search" placeholder="Your email address" id="searchbar"
                            className={styles.searchbarinput} />
                    <input type="submit" value="Subcribe" className={styles.submitinput} />
                    </div>
                </div>
    )
}

export default FooterSearch