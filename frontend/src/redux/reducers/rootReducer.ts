import { productReducer } from './productReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    products: productReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;