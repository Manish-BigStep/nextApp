import Link from 'next/link';
import { useSelector } from 'react-redux';
import classes from './Header.module.css';

const Header = () => {
    const cartItems = useSelector(state => state.myCart);

    let totalCost = cartItems.products.map(item => {
        return item.cost
    }).reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    },0)

    return(
        <>
            <ul className={classes.cart}>
                <li>
                    <Link href="/cart">
                        <img src = "https://freepngimg.com/thumb/categories/1325.png" alt = "cart" />
                    </Link>
                </li>
                <li><span>{cartItems.products.length} items</span></li>
                <li><span>$ {totalCost}</span></li>
            </ul>
        </>
    )
}

export default Header;