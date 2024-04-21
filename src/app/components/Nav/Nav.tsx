import React from 'react';
import './Nav.css'
import {nav_array} from "../../constants/Constants";


const Nav = ({services}: any) => {
    const scrollToBlock = () => {
        const block: any = document.getElementById('services');
        block.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <ul className="nav__list">
            {nav_array.map((item, index) => (
                <li key={item.id}  className={index === nav_array.length - 1 ? 'button' : ''}>
                    <a className={'nav__link'}
                       href={index === 2 ? undefined : item.href}
                       style={services === true ? {color: 'black'} : {color: 'white'}}
                       onClick={item.id === 2 ? scrollToBlock : undefined}
                    >
                        {item.value}
                    </a>
                    {/*{index === nav_array.length - 1 ?
                        <a className={'button'}>Позвонить</a> : ''}*/}
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
