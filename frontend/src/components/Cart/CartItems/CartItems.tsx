import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

const CartItems = () => {
    const cartItems = useSelector((state: any)=>state?.cart?.cartItems)
    console.log(cartItems);
    const cartItemsArray = cartItems && Object.keys(cartItems);
    console.log(cartItemsArray);

    return (
        <div className='container mx-auto'>
            {
                cartItemsArray.map((cv: any) => <CartItem key={cv} data={cartItems[cv]}/>)
            }
        </div>
    );
};

export default CartItems;<h1>cart items</h1>