import CustomButton from "../../Common/CustomButton/CustomButton"
import "./CollectionItem.scss"

const CollectionItem = ({item}: any)=>{

    const addItem=(item: any)=>{
        console.log("clicked add to cart");
    }
    
    return(
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${item.image})` }} />

            <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
            </div>
            
            <CustomButton onClick={() => addItem(item)} inverted>
                Add to cart
            </CustomButton>
        </div>
        
    )
}

export default CollectionItem