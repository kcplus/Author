'use client'
import React, {useState} from 'react';
import './Nav.css'
import {nav_array} from "../../constants/Constants";
import butt from '../../assets/Property 1=Frame 1.svg'
import hover_button from '../../assets/Property 1=Frame 2.svg'
import hover_button_black from '../../assets/Property 1=Frame 7.svg'
import Image from "next/image";
import Link from "next/link";


const Nav = ({services, clientPage, contactsPage}: any) => {
    const [mouseEnter, setMouseEnter] = useState(false)
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

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
                        <Link className={'nav__link'}
                           href={width <= 430 && index === 4 ? 'tel:+375444966866' : item.href}
                           style={width <= 430 ? {color: 'white'} : services === true ? {color: 'black'} : {color: 'white'}}
                        >
                            {item.id === 4 ?
                                <Image
                                    src={mouseEnter && services ? hover_button_black : mouseEnter ? hover_button : butt}
                                    alt={''} style={{marginTop: '5px'}}
                                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/> : item.value}
                        </Link>
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
