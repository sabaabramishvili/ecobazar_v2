import Comment from '../Comment/Comment'
import styles from './CommentWrap.module.scss'

const CommentWrap = () => {
    const dummyData = [

        { image: '/Bag.svg', description: 'loremasdmasnfkjasbofnbaksfaslnfbiashfnoiasnfi', firstname: 'roberto junior' },
        { image: '/Bag.svg', description: 'loremasdmasnfkjasbofnbaksfaslnfbiashfnoiasnf i', firstname: 'roberto junior' },
        { image: '//Bag.svg', description: 'loremasdmasnfkjasbofnbaksfaslnfbiashfnoiasnf i', firstname: 'roberto junior' },
        { image: '/Bag.svg', description: 'loremasdmasnfkjasbofnbaksfaslnfbiashfnoiasnf i', firstname: 'roberto junior' },
        { image: '/Bag.svg', description: 'loremasdmasnfkjasbofnbaksfaslnfbiashfnoiasnf i', firstname: 'roberto junior' },
        { image: '/Bag.svg', description: 'loremasdmasnfkjasbofnbaksfaslnfbiashfnoiasnf i', firstname: 'roberto junior' },
        { image: '/Bag.svg', description: 'loremasdmasnfkjasbofnbaksfaslnfbiashfnoiasnf i', firstname: 'roberto junior' },
        { image: '/Bag.svg', description: 'loremasdmasnfkjasbofnbaksfaslnfbiashfnoiasnf i', firstname: 'roberto junior' },
        { image: '/Bag.svg', description: 'loremasdmasnfkjasbofnbaksfaslnfbiashfnoiasnf i', firstname: 'roberto junior' },
        { image: '/firstnigga.svg', description: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget', firstname: 'Robert Fox' },
        { image: '/verynigga.svg', description: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget', firstname: 'Dianne Russell' },
        { image: '/asiannigga.svg', description: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget', firstname: 'Eleanor Pena' }

    ]

    return (
        <div className={styles.container}>
            {dummyData.map((dummyData, index) => (
                index > 8 && (
                    <div>
                        <Comment image={dummyData.image} description={dummyData.description} firstname={dummyData.firstname} />
                    </div>
                )
            ))}
        </div>
    );
};

export default CommentWrap