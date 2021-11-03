import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ handleClick, isGoogleSignIn, children, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={handleClick} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;