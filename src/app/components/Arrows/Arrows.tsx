'use client'
import Image from "next/image";
import arrowLeft from "../../assets/VectorLeft.svg";
import arrowRight from "../../assets/VectorRight.svg";
import React, {useEffect, useState} from "react";


export const PrevArrow = (props: any) => {
    const {className, style, onClick} = props;
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)
    const arrowStyles = {
        display: "block",
        marginLeft: width <= 375 ? '-25px' : width === 390 ? '-45px' : width === 414 ? '-60px' : width === 430 ? '-25px' : width === 412 ? '-50px' : '-410px',
        width: width <= 375 ? '30px' : width === 390 ? '30px' : width === 414 ? '40px' : width === 430 ? '40px' : width === 412 ? '40px' : '50px',
        height: '142px'
    };
    return (
        <>
            <Image src={arrowLeft} alt={'Стрелка в лево'} className={className} style={{...style, ...arrowStyles}}
                   onClick={onClick}/>
        </>
    )
}
export const NextArrow = (props: any) => {
    const {className, style, onClick} = props;
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)
    const arrowStyles = {
        display: "block",
        marginRight: width === 414 ? '-50px' : width <= 387 ? '-25px' : width === 390 ? '-25px' : width === 430 ? '-25px' : width === 412 ? '-50px' : '-60px',
        width: width <= 375 ? '30px' : width === 390 ? '30px' : width === 414 ? '40px' : width === 430 ? '40px' : width === 412 ? '40px' : '50px',
        height: '142px'
    }
    return (
        <>
            <Image src={arrowRight} alt={'Стрелка в право'} className={className} style={{...style, ...arrowStyles}}
                   onClick={onClick}/>
        </>
    )
}