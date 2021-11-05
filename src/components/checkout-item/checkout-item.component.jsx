import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';
import { removeCartItem, addCartItem, subtractCartItem } from '../../redux/cart/cart.action';

const CheckoutItem = ({ cartItem, removeItem, addItem, subtractItem}) => {
    const {name, price, quantity, imageUrl } = cartItem;   
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt='item image'/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => subtractItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove" onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeCartItem(item)),
    addItem: item => dispatch(addCartItem(item)),
    subtractItem: item => dispatch(subtractCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);