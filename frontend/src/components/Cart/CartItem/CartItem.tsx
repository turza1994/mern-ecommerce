import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, decreaseQuantityFromCart, removeFromCart } from '../../../redux/actionCreators/cartAction';

const CartItem = ({data}: any) => {
    const { name, image, price, totalPrice, qty } = data
    const dispatch = useDispatch()

    return (
        <div className='row justify-content-center align-items-center lead'>
            {/* name */}
            <div className="nameAndImage col-4 d-flex flex-column flex-md-row align-items-center">
                <img src={image} alt="" className='image img-thumbnail w-50 me-auto' />
                <span className='name me-auto'>{name}</span>
            </div>

            {/* price, quantity, total price */}
            <div className='col-5 d-flex flex-column flex-md-row justify-content-around align-items-center'>
                <span className="price">
                    $ {price}
                </span>

                <div className="qty bg-light rounded shadow-sm d-flex justify-content-around align-items-center lead m-3">
                    <button className='btn btn-light' onClick={()=>dispatch(decreaseQuantityFromCart(data))}>
                        <i className="fa-solid fa-minus"></i>
                    </button>

                    <span className='px-3 fs-5'> {qty} </span>

                    <button className='btn btn-light' onClick={()=>dispatch(addToCart(data))}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                
                <span className="totalPrice">
                    $ {totalPrice}
                </span>
            </div>

            {/* Remove from cart icon */}
            <div className='col-3'>
                <i 
                    className="fa-solid fa-trash-can text-danger fw-light ms-5 btn"
                    onClick={()=>dispatch(removeFromCart(data))}
                ></i>
            </div>
            
            <hr className='w-100 my-5'/>
        </div>
    );
};

export default CartItem;