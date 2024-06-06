import styles from './Categories.module.scss'
import Image from 'next/image'
 interface Props {
    title : string
    image : string
 }

 const Categories = (props : Props) => {
    return(
        <div className={styles.container}>
            <Image src={props.image} alt='product' width={190} height={130} />
            <span className={styles.text}>{props.title}</span>
        </div>
    )
 }

 export default Categories