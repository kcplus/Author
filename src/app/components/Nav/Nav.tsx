import React from 'react';
import './Nav.css'
import {nav_array} from "../../constants/Constants";


const Nav = ({services}) => {
    const scrollToBlock = () => {
        const block = document.getElementById('services');
        block.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <ul className="nav__list">
            {nav_array.map((item, index) => (
                <li key={item.id} className={index === nav_array.length - 1 ? 'button' : ''}>
                    <a className={'nav__link'}
                       href={index === 2 ? null : item.href}
                       style={services === true ? {color: 'black'} : {color: 'white'}}
                       onClick={item.id === 2 ? scrollToBlock : null}
                    >
                        {item.value}
                    </a>
                </li>
            ))}
        </ul>
    )
};

export default Nav;



{/*<div className="nav__close" id="nav-close" onClick={toggleMenu}>
                        <IoClose/>
                    </div>*/
}
