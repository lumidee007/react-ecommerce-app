import React from "react";
import './collectionItem.styles.scss'
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import { addToCart } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem}) => {
    const {imageUrl, name, price} = item
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}> Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)