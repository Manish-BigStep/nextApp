import { ADD_TO_CART, CLEAR_CART, REMOVE_PRODUCTS } from "./actionTypes";

export const cartInitialState = {products : []};

export const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {...state, products: [...state.products, action.payload]};
        
        case REMOVE_PRODUCTS:
            return {...state, products: state.products.filter(item => item.id !== action.payload)}

        case CLEAR_CART:
            return {...state, products: []}
    
        default:
            return state;
    }
}