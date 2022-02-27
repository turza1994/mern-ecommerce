import { actionTypes } from './../actionTypes';
import axios from 'axios'
import BASE_URL from '../../BASE_URL';

export const getProducts = () => async(dispatch: any)=>{
    dispatch({
        type: actionTypes.GET_PRODUCTS_PENDING
    })
    try{
        const {data} = await axios.get(`${BASE_URL}/api/products`)
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch(err: any){
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: err?.message
        })
    }
}