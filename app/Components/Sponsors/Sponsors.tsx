import styles from './Sponsors.module.scss'
import Image from 'next/image'
const Sponsors = () => {
    return (
        <div className={styles.container}>
            <Image src='/steps.svg' alt='steps' width={81.582} height={32} />
            <Image src='/linee.svg' alt='line' width={1} height={32} />
            <Image src='/mangologo.svg' alt='mango' width={66.938} height={32} />
            <Image src='/linee.svg' alt='line' width={1} height={32} />
            <Image src='/food.svg' alt='food' width={59.939} height={32} />
            <Image src='/linee.svg' alt='line' width={1} height={32} />
            <Image src='/bigfood.svg' alt='bigfood' width={82.645} height={32} />
            <Image src='/linee.svg' alt='line' width={1} height={32} />
            <Image src='/bookoff.svg' alt='bookoff' width={131.019} height={32} />
            <Image src='/linee.svg' alt='line' width={1} height={32} />
            <Image src='/gseries.svg' alt='gseries' width={95.504} height={32} />
        </div>
    )
}

export default Sponsors