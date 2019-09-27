import * as Types from './cart.types';
import { addItemToCart } from './cart.utils';

const initialState = {
    isHidden : true,
    cartItems: []
}

const cartReducer = (state=initialState, action ) =>{
    switch (action.type) {
        case Types.TOGGLE_CART_HIDDEN: 
            return{
                ...state,
                isHidden : !state.isHidden
            };
        case Types.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case Types.DELETE_ITEM:
            return {
                ...state,
                cartItems : state.cartItems.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default cartReducer;