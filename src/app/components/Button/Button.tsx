import React from 'react';
import './Button.css'

const Button = ({children}: any) => {
    return (
        <div className="btn-container">
            <a href={'/pages/contacts'}>
                <button className="btn btn-primary" type="button">{children}</button>
            </a>
        </div>
    );
};

export default Button;