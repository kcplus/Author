'use client'
import React, {useState} from 'react';
import './Nav.css'
import {nav_array} from "../../constants/Constants";
import butt from '../../assets/Property 1=Frame 1.svg'
import hover_button from '../../assets/Property 1=Frame 2.svg'
import hover_button_black from '../../assets/Property 1=Frame 7.svg'
import Image from "next/image";


const Nav = ({services, clientPage, contactsPage}: any) => {
    const [mouseEnter, setMouseEnter] = useState(false)

    const scrollToBlock = () => {
        if (services || clientPage || contactsPage === true) {
            return;
        } else {
            const block: any = document.getElementById('services');
            block.scrollIntoView({behavior: 'smooth'});
        }
    }
    const handleMouseEnter = () => {
        setMouseEnter(true);
    };

    const handleMouseLeave = () => {
        setMouseEnter(false);
    };

    return (
        <ul className="nav__list">
            {nav_array.map((item, index) => (
                    <li key={item.id}>
                        <a className={'nav__link'}
                           href={services === true ? item.href : services || clientPage === true && index === 2 ? '/' :  contactsPage === true && index === 2 ? '/' : index === 2 ? '#' : item.href}
                           style={services === true ? {color: 'black'} : {color: 'white'}}
                           onClick={item.id === 2 ? scrollToBlock : undefined}
                        >
                            {item.id === 4 ?
                                <Image
                                    src={mouseEnter && services ? hover_button_black : mouseEnter ? hover_button : butt}
                                    alt={''} style={{marginTop: '-23px'}}
                                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/> : item.value}
                        </a>
                    </li>
                )
            )}
        </ul>
    )
};

export default Nav;


{/*<div className="nav__close" id="nav-close" onClick={toggleMenu}>
                        <IoClose/>
                    </div>*/
}
