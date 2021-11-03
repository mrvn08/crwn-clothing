import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import { addCartItem } from "../../redux/cart/cart.action";

import './collection-item.styles.scss';

const CollectionItem = ({item, addCartItem}) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div 
                className="image"
                style={{backgroundImage: `url(${imageUrl})`}}
                />
            <div className="collection-footer">
                <span className="name">{ name }</span>
                <span className="price">{ price }</span>
            </div>
            <CustomButton handleClick = {() => addCartItem(item)} inverted>Add to Cart</CustomButton>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
});

export default connect( null, mapDispatchToProps )( CollectionItem );