'use client'
import React, {useState} from 'react';
import Logo from "../Logo/Logo";
import './Header.css'
import Nav from "../Nav/Nav";
import close from '../../assets/КНОПКА ЗАКРЫТЬ.svg'
import top from '../../assets/Vector 2.svg'
import bottom from '../../assets/Vector 3.svg'
import vectcolot from '../../assets/vecto3_color.svg'
import Image from "next/image";

const Header = ({services, clientPage, contactsPage}: any) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const closeMenu = () => {
        setShowMenu(false)
    }

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };

    return (
        <header className="header">
            <nav className="nav container">
                <Logo services={services} clientPage={clientPage}/>
                <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} style={{zIndex: '999'}} id="nav-menu">
                    <Nav services={services} clientPage={clientPage} contactsPage={contactsPage}/>
                </div>
                {showMenu === true ? (
                    <div className="nav__toggle" id="nav-toggle" onClick={closeMenu} style={{zIndex: '1000'}} >
                        <Image src={close} alt={'Закрыть'} color={services === true ? 'turquoise' : 'white'}
                               style={{width: '80px', height: '40px', marginRight: '10px'}}/>
                    </div>
                ) : (
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <Image src={services === true ? vectcolot : top} alt={''} style={{
                                width: '60px',
                                height: '20px',
                                marginRight: '13px',
                            }}/>
                            <Image src={services === true ? vectcolot : bottom} alt={''} style={{
                                width: '60px',
                                height: '20px',
                                marginRight: '13px',
                            }}
                            />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
/*className={`nav__menu ${showMenu ? "show-menu" : ""}`}*/
