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
                        [item._id]: {
                            ...item
                        }
                    }
                }

            }else{
                item.qty = state.cartItems[action.payload._id].qty + 1
                item.totalPrice = item.price * item.qty

                return {
                    ...state,
                    cartItems: {
                        ...state.cartItems,
                        [item._id]: {
                            ...item
                        }
                    }
                }
            }
        
        case actionTypes.DECREASE_QUANTITY_FROM_CART: 
            const item2 = action.payload
            item2.qty = state.cartItems[item2._id].qty - 1
            item2.totalPrice = item2.price * item2.qty

            return {
                ...state,
                cartItems: {
                    ...state.cartItems,
                    [item2._id]: {
                        ...item2
                    }
                }
            }    

            case actionTypes.REMOVE_FROM_CART:
                const item3 = action.payload
                delete state.cartItems[item3._id]
                
                return {
                    ...state,
                    cartItems: {
                        ...state.cartItems
                    }
                }

        default:
            return state
    }
}