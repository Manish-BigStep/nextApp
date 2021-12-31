import DUMMY_DATA from '../pages/api/products/data.json';

const initialState = DUMMY_DATA

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
       // case value:
            
         //   break;
    
        default:
            return state;
    }
}