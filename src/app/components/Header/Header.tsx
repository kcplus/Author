'use client'
import React, {useState} from 'react';
import Logo from "../Logo/Logo";
import './Header.css'
// import { IoMenu } from "react-icons/io5/";
import Nav from "../Nav/Nav";


const Header = ({services}) => {
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
                <Logo services={services}/>
                <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
                    <Nav closeMenuOnMobile={closeMenuOnMobile} toggleMenu={toggleMenu} services={services}/>
                </div>
                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    {/*<IoMenu color={services === true ? 'black' : 'white'}/>*/}
                </div>
            </nav>
        </header>
    );
};

export default Header;
