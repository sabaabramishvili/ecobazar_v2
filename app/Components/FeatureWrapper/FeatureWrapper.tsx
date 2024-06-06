import Feature from '../Feature/Feature'
import styles from './FeatureWrapper.module.scss'

const FeatureWrapper = () => {
    return (
        <div className={styles.container}>
            <Feature title='Free Shipping' subtext='Free shipping on all your order' image='./delivery-truck 1.svg'/>
            <Feature title='Customer Support 24/7' subtext='Instant access to Support' image='./headphones.svg'/>
            <Feature title='100% Secure Payment' subtext='We ensure your money is save' image='./shoppingbag.svg'/>
            <Feature title='Money-Back Guarantee' subtext='30 Days Money-Back Guarantee' image='./package.svg'/>
        </div>
    )
}

export default FeatureWrapper