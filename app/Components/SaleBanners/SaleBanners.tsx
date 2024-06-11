import CountDown from '../BannersChildText/CountDown/CountDown'
import FruitBannerInfo from '../BannersChildText/FruitBannerInfo/FruitBannerInfo'
import FruitBannerText from '../BannersChildText/FruitBannerInfo/FruitBannerInfo'
import MeatBannerInfo from '../BannersChildText/MeatBannerInfo/MeatBannerInfo'
import SaleMonthBanner from '../SaleMonthBanner/SaleMonthBanner'
import styles from './SaleBanners.module.scss'

const SaleBanners = () => {
    return (
        <div className={styles.container}>
            <SaleMonthBanner title='Sale Of The Month' subtext='best deals' img='vegetablebg'>
                <CountDown days='00'hours='02' mins='18' secs='46'  style='white'/>

            </SaleMonthBanner>
            <SaleMonthBanner title='Low-Fat Meat' subtext='85% fat free' img='meatbg'>
                <MeatBannerInfo />
            </SaleMonthBanner>
            <SaleMonthBanner title='100% Fresh Fruit' subtext='summer sale' img='fruitbg'>
                <FruitBannerInfo />
            </SaleMonthBanner>

        </div>
    )
}

export default SaleBanners