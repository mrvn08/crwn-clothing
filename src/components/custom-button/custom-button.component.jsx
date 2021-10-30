import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ handleClick, children, ...otherProps}) => (
    <button className='custom-button' onClick={handleClick} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;