import Products from '../Products/Products'
import styles from './FeatureProducts.module.scss'

const FeatureProducts = () => {
    return (
        <div className={styles.container}>
            <Products title='Green Apple' curr='$14.99' discount='$20.99' image='/apple.png' sale='true' />
            <Products title='Fresh Indian Malta' curr='$20.00' image='/orange.png' />
            <Products title='Chinese cabbage' curr='$12.00' image='/cabbage.png' />
            <Products title='Green Lettuce' curr='$9.00' image='/lettuce.png' />
            <Products title='Eggplant' curr='$34.00' image='/eggplant.png' />
        </div>
    )
}

export default FeatureProducts