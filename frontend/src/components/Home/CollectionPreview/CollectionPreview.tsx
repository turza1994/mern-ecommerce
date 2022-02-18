import { useSelector } from 'react-redux';
import CollectionItem from '../CollectionItem/CollectionItem'
import {RootState} from '../../../redux/reducers/rootReducer';
import './CollectionPreview.scss'

const CollectionPreview = ({category}: any) => {

    let title = category
    const items = useSelector((state: RootState) => state.products.allProducts)
    console.log("dhuksi");

    return (
        <div className="CollectionPreview">
            <h1 className='text-capitalize' >{title}</h1>
            <hr className='w-25 text-primary' />
            <div className="items">
                {
                    items
                    .filter((cv: any, i: number) => cv.category===title )
                    .map((item: any)=>(
                        <CollectionItem key={item._id} item={ item } />
                    ))
                    .filter((cv: any, i: number) => i<4 )
                }
            </div>
                
        </div>
    );
};

export default CollectionPreview;
