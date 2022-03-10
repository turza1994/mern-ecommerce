import React from 'react';

const CartItem = ({data}: any) => {
    const { name, image, price, totalPrice, qty } = data
    return (
        <div className='row justify-content-center align-items-center lead'>

            <div className="nameAndImage col-4 d-flex flex-column flex-md-row align-items-center">
                <img src={image} alt="" className='image img-thumbnail w-50 me-auto' />
                <span className='name me-auto'>{name}</span>
            </div>

            <div className='col-5 d-flex flex-column flex-md-row justify-content-around align-items-center'>
                <span className="price">
                    $ {price}
                </span>
                <div className="qty bg-light rounded shadow-sm d-flex justify-content-around align-items-center lead">
                    <i className="fa-solid fa-plus"></i>
                    <span className='px-5 fs-5'> {qty} </span>
                    <i className="fa-solid fa-minus"></i>
                </div>
                <span className="totalPrice">
                    $ {totalPrice}
                </span>
            </div>

            <div className='col-3'>
                <i className="fa-solid fa-trash-can text-danger fw-light ms-5 btn"></i>
            </div>
            
            <hr className='w-100 my-5'/>
        </div>
    );
};

export default CartItem;