import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ handleClick, isGoogleSignIn, children, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={handleClick} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;