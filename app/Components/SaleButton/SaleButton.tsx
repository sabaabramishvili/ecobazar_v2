import styles from './SaleButton.module.scss'

interface Props {
    title: string
    type: string
}

const SaleButton = (props: Props) => {
    const arr = [styles.button]
    { props.type == 'best' ? arr.push(styles.best) : arr.push(styles.normal) }

    return (
        <span className={arr.join(' ')}>{props.title}</span>
    )
}

export default SaleButton