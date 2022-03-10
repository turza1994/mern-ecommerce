import { useDispatch } from "react-redux"
import { addToCart } from "../../../redux/actionCreators/cartAction"
import CustomButton from "../../Common/CustomButton/CustomButton"
import "./CollectionItem.scss"

const CollectionItem = ({item}: any)=>{
    const dispatch = useDispatch()

    const addItem=(item: any)=>{
        console.log("clicked add to cart");
        dispatch(addToCart(item))
    }
    
    return(
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${item.image})` }} />

            <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">${item.price}</span>
            </div>
            
            <CustomButton onClick={() => addItem(item)} inverted>
                Add to cart
            </CustomButton>
        </div>
        
    )
}

export default CollectionItem