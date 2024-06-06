import styles from './Feature.module.scss'
import Image from 'next/image'

interface Props {
    title: string
    subtext: string
    image: string
}
const Feature = (props : Props) => {
    return (
        <div className={styles.container}>
            <Image src={props.image} alt ='feature'width={40} height={40}/>
            <div className={styles.textContainer}>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.subtext}>{props.subtext}</span>
            </div>
        </div>
    )
}
export default Feature