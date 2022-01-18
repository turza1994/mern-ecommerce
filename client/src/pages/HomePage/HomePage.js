import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItems from '../../components/MenuItems/MenuItems';
import Slider from '../../components/Slider/Slider';
import { getProducts } from '../../redux/actionCreators/productAction';

const HomePage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.allProducts)
    console.log(products);

    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            <Slider />
            <MenuItems />
        </div>
    );
};

export default HomePage;