import React from 'react';
import CartCalculation from '../../components/Cart/CartCalculation/CartCalculation';
import CartItems from '../../components/Cart/CartItems/CartItems';

const CartPage = () => {
    return (
        <div className='container mt-5 pt-5 position-relative'>
            <h2 className='text-center mt-5'>Shopping Cart</h2>
            <hr className='mb-5'/>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <CartItems />
                    </div>
                    <div className="col-md-4">
                        <CartCalculation />
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default CartPage;