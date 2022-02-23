import { cartReducer } from './cartReducer';
import { productReducer } from './productReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;