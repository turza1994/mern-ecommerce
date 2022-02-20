import React from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import {RootState} from '../../../redux/reducers/rootReducer';

const ShopPreview = () => {
    let categories = useSelector((state: RootState) => state.products.categories)
    categories = categories && Object.keys(categories);
    console.log(categories);

    return (
        <div className='container'>
            {
                categories?.map((cv: any, i: number)=>(
                    <CollectionPreview key={i} category={cv} />
                ))
            }        
        </div>
    );
};

export default ShopPreview;