import { useDispatch } from 'react-redux';
import { addToCart, totalofItems } from '../../redux/actions';
import classes from './ProductsTable.module.css';

const ProductsTable = ({data}) => {

    const dispatch = useDispatch();

    const onAddToCart = (data) => {
        dispatch(addToCart(data))
    }

    return (
        <div className = {classes.table}>
            {data.map(({id, product, image, cost, description}) => (
                <ul key = {id}>
                    <li><img src = {image} alt ={product} /></li>
                    <div>
                        <p>{product}</p>
                        <li>{description}</li>
                    </div>
                    <li>$ {cost}</li>
                    <li className={classes.cart} onClick = {() => onAddToCart({id,product,image,cost,description})}>add to cart</li>
                </ul>
            ))}
        </div>
    )
}

export default ProductsTable;