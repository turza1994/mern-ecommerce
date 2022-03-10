import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CartCalculation = ({data}: any) => {
    const cartItems = useSelector((state: any)=>state?.cart?.cartItems)
    const cartItemsArray = cartItems && Object.values(cartItems);
    const [subtotal, setSubtotal] = useState(0)
    const [isCheckout, setIsCheckout] = useState(false)

    useEffect(()=>{
        setSubtotal(cartItemsArray.reduce((pv: any,cv: any)=> pv+cv.totalPrice, 0))
    },[cartItemsArray])

    return (
        <div 
            className='position-md-fixed bg-white rounded border'
            style={{
                width: '400px',
                height:'330px'
            }} 
        >
            {
                cartItemsArray.length===0 ?
                <div>
                    <p className="text-center fs-4 mt-5">
                        No items found
                    </p>
                </div>
                : 
                <div className='position-md-absolute'>
                <div 
                    className='pt-5 px-5 d-flex flex-column justify-content-center align-items-start'
                    style={{
                        width: '400px'
                    }} 
                >
                    <div className="subtotal w-100 fs-5 d-flex justify-content-start align-items-center">
                        <p>Subtotal:</p> <p className='ms-auto'>${subtotal}</p>
                    </div>
                    <div className="shippingFee w-100 fs-5 d-flex justify-content-start align-items-center">
                        <p>Shipping fee:</p> <p className='ms-auto'>$5</p>
                    </div>
                    <div className="grandTotal w-100 fs-5 d-flex justify-content-start align-items-center">
                        <p className='text-primary'>Grand Total:</p> <p className='ms-auto'>${subtotal+5}</p>
                    </div>
                    <br />
                    <div className='d-flex justify-content-start align-items-center'>
                        <input type="checkbox" name="" id="agree" 
                            className='me-3' 
                            style={{transform: 'scale(1.5)'}}
                            onChange={()=>setIsCheckout(!isCheckout)}
                        />
                        <label htmlFor="agree">I agree with the terms and conditions</label>
                    </div>
                    <button 
                        className='btn btn-primary text-white px-5 py-2 mx-auto mt-4 fs-5'
                        disabled={!isCheckout}
                    >Proceed to Checkout</button>
                </div>
            </div>
            }
        </div>
    );
};

export default CartCalculation;