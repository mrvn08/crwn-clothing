import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, cartHidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/shop">Contact</Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                :
                <Link className="option" to="/signin">Sign In</Link>
            }
            <CartIcon />
        </div>
        { cartHidden ? null : <CartDropdown /> }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);