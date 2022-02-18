import { ProductAction } from './../actionInterfaces/productAction';
import { actionTypes } from '../actionTypes';
import { IProduct } from './../../types';

interface IState{
  allProducts: null | IProduct[],
  loading: boolean,
  error: null | string,
  categories: any
}

const initialState: IState = {
    allProducts: null,
    categories: null,
    loading: false,
    error: null
}

export const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
      case actionTypes.GET_PRODUCTS_PENDING: //Getting all Products
        return { 
            ...state, 
            loading: true 
        }

      case actionTypes.GET_PRODUCTS_SUCCESS:
        const allProducts: any = action.payload
        let categories: any = {}

        allProducts.forEach((cv: any) => {
            if(!categories[cv.category]){
              categories[cv.category] = cv.category
            }
        });
        categories = Object.keys(categories);

        return {
          ...state,
          loading: false,
          allProducts,
          categories
        }

      case actionTypes.GET_PRODUCTS_FAIL:
        return { 
            ...state,
            loading: false,
            error: action.payload 
        }

      default:
        return state
    }
  }