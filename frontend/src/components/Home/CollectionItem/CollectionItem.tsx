import "./CollectionItem.scss"

const CollectionItem = (props: any)=>{
    return(
        <div className="CollectionItem">
            <div className="background" style={{backgroundImage: `url(${props.item.image})` }} />
            <span className="productName">{props.item.name}</span>
            <span className="productPrice">{props.item.price}</span>
        </div>
    )
}

export default CollectionItem