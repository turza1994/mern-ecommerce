import { actionTypes } from "../actionTypes";

export const cartReducer = (state: any = [], action: any)=>{
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return [
                ...state,
                action.payload
            ]
    
        default:
            return state
    }
}