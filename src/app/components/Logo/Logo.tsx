import React from 'react';
import Image from "next/image";
import logo from '../../assets/logo.svg'
import color_logo from '../../assets/color_logo.svg'
import'./Logo.css'

const Logo = ({services}: any) => {
    return (
        <>
            <a className={'nav__logo'} href={'/Author_new'}>
                <Image src={services === true ? color_logo : logo} alt={'Logo'} />
            </a>
        </>
    );
};

export default Logo;