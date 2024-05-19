import React, {useState} from 'react';
import Image from "next/image";
import logo from '../../assets/logo.svg'
import color_logo from '../../assets/color_logo.svg'
import './Logo.css'

const Logo = ({services, clientPage}: any) => {
    const [mouseEnter, setMouseEnter] = useState(false)

    const handleMouseEnter = () => {
        setMouseEnter(true);
    };

    const handleMouseLeave = () => {
        setMouseEnter(false);
    };
    return (
        <>
            <a className={'nav__logo'} href={'/'}>
                <Image src={services || clientPage || mouseEnter === true ? color_logo : logo}
                       onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className={'style_logo'} alt={'Logo'}/>
            </a>
        </>
    );
};

export default Logo;