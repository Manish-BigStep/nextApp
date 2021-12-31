import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../redux/actions";
import classes from './cart.module.css';

const Cart = () => {
    const cartProducts = useSelector(state => state.myCart.products);
    let cartQuantity = cartProducts.length;
    const dispatch = useDispatch();

    const renderCart = (cartQuantity) => {
        return cartQuantity > 0 ? 
    <div className={classes.card}>
        {cartProducts.map(product => (
            <div key = {product.id} className={classes.cart}>
                <img src ={product.image} alt = {product.product} />
                    <div className={classes.cartproduct}>
                        <p>{product.product}</p>
                        <p>{product.description}</p>
                        <div onClick = {dispatch.bind(null, deleteProduct(product.id))} className={classes.cartimg}>
                        <img src = "https://img.freepik.com/free-icon/trash-bin-symbol_318-10194.jpg?size=338&ext=jpg" alt = 'trash-bin' />
                        </div> 
                    </div>
            </div>
        ))}
    </div> : 
    <h2>Add Product to Cart</h2>
    }

    return (
        renderCart(cartQuantity) 
    )
}

export default Cart;