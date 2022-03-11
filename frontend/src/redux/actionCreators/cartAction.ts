import { actionTypes } from '../actionTypes';
import { IProduct } from './../../types';

export const addToCart = (item: IProduct): any => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item
    }
}

export const decreaseQuantityFromCart = (item: IProduct): any => {
    return {
        type: actionTypes.DECREASE_QUANTITY_FROM_CART,
        payload: item
    }
}

export const removeFromCart = (item: IProduct): any => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: item
    }
}