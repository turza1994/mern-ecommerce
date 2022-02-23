import { actionTypes } from '../actionTypes';
import { IProduct } from './../../types';

export const addToCart = (item: IProduct): any =>{
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item
    }
}