import Categories from '../Categories/Categories'
import styles from './PopularCategories.module.scss'
import Image from 'next/image'

const PopularCategories = () => {
    return (
        <div className={styles.container}>
            <Categories title='Fresh Fruit' image='/FreshFruit.png' />
            <Categories title='Fresh Vegetables' image='/Freshvegetables.png' />
            <Categories title='Meat & Fish' image='/meatandfish.png' />
            <Categories title='Snacks' image='/snacks.png' />
            <Categories title='Beverages' image='/beverages.png' />
            <Categories title='Beauty & Health' image='/beautyandhealts.png' />
            <Categories title='Bread & Bakery' image='/breadandbakery.png'/>
            <Categories title='Baking Needs' image='/bakingneeds.png'/>
            <Categories title='Cooking' image='/cooking.png'/>
            <Categories title='Diabetic Food' image='/diabeticfood.png'/>
            <Categories title='Dish Detergents' image='/dishdetergents.png'/>
            <Categories title='Oil' image='/oil.png'/>
        </div>
    )
}

export default PopularCategories


