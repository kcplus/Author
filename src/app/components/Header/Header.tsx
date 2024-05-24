'use client'
import React, {useState} from 'react';
import Logo from "../Logo/Logo";
import './Header.css'
import Nav from "../Nav/Nav";
import {IoClose, IoMenu} from "react-icons/io5";


const Header = ({services, clientPage, contactsPage}: any) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };

    return (
        <header className="header">
            <nav className="nav container">
                <Logo services={services} clientPage={clientPage}/>
                <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
                    <Nav services={services} clientPage={clientPage} contactsPage={contactsPage}/>
                </div>
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <IoMenu color={services === true ? 'black' : 'white'}
                                style={{width: '80px', height: '40px'}}/>
                    </div>
            </nav>
        </header>
    );
};

export default Header;
/*className={`nav__menu ${showMenu ? "show-menu" : ""}`}*/
