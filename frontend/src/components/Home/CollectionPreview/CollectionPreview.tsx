import { useSelector } from 'react-redux';
import CollectionItem from '../CollectionItem/CollectionItem'
import {RootState} from '../../../redux/reducers/rootReducer';
import './CollectionPreview.scss'
import '../../../index.css'

const CollectionPreview = ({category}: any) => {

    let title = category
    const items = useSelector((state: RootState) => state.products.allProducts)

    return (
        <div className="CollectionPreview">
            <h2 className='text-capitalize border-bottom border-3 d-inline pe-5' >{title}</h2>
            {/* <hr className='w-25 text-secondary' /> */}
            <div className="items mt-5">
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
