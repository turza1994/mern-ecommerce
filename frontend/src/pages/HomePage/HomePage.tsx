import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShopPreview from '../../components/Home/ShopPreview/ShopPreview';
import MenuItems from '../../components/Home/MenuItems/MenuItems';
import Slider from '../../components/Home/Slider/Slider';
import { getProducts } from '../../redux/actionCreators/productAction';

const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            <Slider />
            <MenuItems />
            <ShopPreview />
        </div>
    );
};

export default HomePage;