import HotSale from '@/app/HotSale/HotSale'
import styles from './HotDeals.module.scss'
import Products from '../Products/Products'

const HotDeals = () => {
    return (
        <div className={styles.container}>
            <div className={styles.saleLine}>
                <HotSale />
                <div className={styles.products}>
                    <Products title='Chinese cabbage' curr='$12.00' image='/cabbage.png' />
                    <Products title='Green Lettuce' curr='$9.00' image='/lettuce.png' />
                    <Products title='Eggplant' curr='34.00' image='/eggplant.png' />
                    <Products title='Fresh Cauliflower' curr='$12.00' image='/flower.png' />
                    <Products title='Green Capsicum' curr='$9.00' discount='$20.99' image='/capiscum.png' sale='true' />
                    <Products title='Green Chilli' curr='$34.00' image='/chili.png' />
                </div>
            </div>
            <div className={styles.lastProducts}>
                <Products title='Big Potatoes' curr='$20.00' image='/potato.png' />
                <Products title='Corn' curr='$20.00' image='/corn.png' />
                <Products title='Red Chili' curr='$12.00' image='/redchili.png' />
                <Products title='Red Tomatos' curr='9.00' discount='20.99' image='/redtomato.png' sale='true' />
                <Products title='Surjapur Mango' curr='$34.00' image='/mango.png' />
            </div>
        </div>
    )
}

export default HotDeals