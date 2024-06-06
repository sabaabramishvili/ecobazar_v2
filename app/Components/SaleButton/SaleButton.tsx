import styles from './SaleButton.module.scss'

interface Props {
    title: string
    type: string
}

const SaleButton = (props: Props) => {
    const arr = []
    { props.type == 'Best' ? arr.push(styles.best) : arr.push(styles.normal) }

    return (
        <span className={arr.join(' ')}>{props.title}</span>
    )
}