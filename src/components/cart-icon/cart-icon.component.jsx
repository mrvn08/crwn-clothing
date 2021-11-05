import React from 'react';
import { connect } from 'react-redux';

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCart, cartCount }) => (
    <div className="cart-icon" onClick={ toggleCart }>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{ cartCount }</span>
    </div>
);

const mapStateToProps = (state) => ({ cartCount: selectCartItemsCount(state) });

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);