import News from '../News/News'
import styles from './NewsWrap.module.scss'

const NewsWrap = () => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <span className={styles.header}>Latest News</span>
            </div>

            <div className={styles.wrapper}>
                <News time='18' title='orangebg' text='Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.' month='NOV' />
                <News time='29' title='eggbg' text='Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.' month='JAN' />
                <News time='21' title='saladbg' text='Eget lobortis lorem lacinia. Vivamus pharetra semper,' month='FEB' />
            </div>
        </div>
    )
}

export default NewsWrap