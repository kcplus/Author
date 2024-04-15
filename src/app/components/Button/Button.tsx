import React from 'react';
import './Button.css'

const Button = ({children}) => {
    return (
        <div className="btn-container">
            <button className="btn btn-primary" type="button">{children}</button>
        </div>
    );
};

export default Button;