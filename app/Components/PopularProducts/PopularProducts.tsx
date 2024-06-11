import Products from '../Products/Products'
import styles from './PopularProducts.module.scss'
import Image from 'next/image'

const PopularProducts = () => {
    return (
        <div className={styles.container}>
            <Products title='Green Apple' curr='$14.99' discount='$20.99' image='/apple.png' sale='true' />
            <Products title='Fresh Indian Malta' curr='$20.00' image='/orange.png' />
            <Products title='Chinese cabbage' curr='$12.00' image='/cabbage.png' />
            <Products title='Green Lettuce' curr='$9.00' image='/lettuce.png' />
            <Products title='Eggplant' curr='$34.00' image='/eggplant.png' />
            <Products title='Big Potatoes' curr='$20.00' image='/potato.png' />
            <Products title='Corn' curr='$20.00' image='/corn.png' />
            <Products title='Fresh Cauliflower' curr='$12.00' image='/flower.png' />
            <Products title='Green Capsicum' curr='$9.00' discount='$20.99' image='/capiscum.png' sale='true' />
            <Products title='Green Chilli' curr='$34.00'  image='/chili.png' />

        </div>
    )
}

export default PopularProducts