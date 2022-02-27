import { actionTypes } from "../actionTypes";

// interface iState{
//     cartItems: any,
//     subTotalPrice: number
// }

const initialState: any = {
    cartItems: {},
    subTotalPrice: 0
}

export const cartReducer = (state: any = initialState, action: any)=>{
    switch (action.type) {
        case actionTypes.ADD_TO_CART:

            const item = action.payload
            
            if(!state.cartItems[action.payload._id]){
                item.qty = 1
                item.totalPrice = item.price

                return {
                    ...state,
                    cartItems: {
                        ...state.cartItems,
                        [action.payload._id]: {
                            ...action.payload
                        }
                    }
                }

            }else{
                item.qty += state.cartItems[action.payload._id].qty
                item.totalPrice = item.price * item.qty

                return {
                    ...state,
                    cartItems: {
                        ...state.cartItems,
                        [action.payload._id]: {
                            ...action.payload
                        }
                    }
                }
            }
            
        default:
            return state
    }
}