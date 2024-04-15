import React from 'react';
import './Taplink.css'

const TaplinkButton = () => {
    return (
        <>
            <label className="checkbox circlepit non-animated">
                <input className="alarmed" type="checkbox"/>
                <img className="mainimg" src="https://img.icons8.com/ios/40/ffffff/sms.png"/>
            </label>
        </>
    );
};

export default TaplinkButton;