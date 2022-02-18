import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CollectionPreview from '../../components/Home/CollectionPreview/CollectionPreview';
import MenuItems from '../../components/MenuItems/MenuItems';
import Slider from '../../components/Slider/Slider';
import { getProducts } from '../../redux/actionCreators/productAction';
import {RootState} from '../../redux/reducers/rootReducer';

const HomePage = () => {
    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.products)
    console.log(products);
    // const [categories, setCategories] = useState<any>([])
    // const categories: any = products && Object.keys(products?.categories)

    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])


    return (
        <div>
            <Slider />
            <MenuItems />
            
            <div className='container'>
                {
                    products?.categories?.map((cv: any, i: number)=>(
                        <CollectionPreview key={i} category={cv} />
                    ))
                }
                
            </div>
        </div>
    );
};

export default HomePage;