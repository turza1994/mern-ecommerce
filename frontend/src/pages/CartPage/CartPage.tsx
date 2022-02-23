import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
    const cart = useSelector((state: any) => state.cart)
    console.log(cart);
    return (
        <div>
            <h1>Hello Cart Page</h1>
        </div>
    );
};

export default CartPage;