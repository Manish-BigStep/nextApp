import { ADD_TO_CART, REMOVE_PRODUCTS, CLEAR_CART } from "./actionTypes";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const deleteProduct = (productId) => {
    return {
        type: REMOVE_PRODUCTS,
        payload: productId
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}
