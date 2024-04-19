'use client'
import Image from "next/image";
import arrowLeft from "../../assets/VectorLeft.svg";
import arrowRight from "../../assets/VectorRight.svg";
import React from "react";


export const PrevArrow = (props: any) => {
    const {className, style, onClick} = props;
    return (
        <>
            <Image src={arrowLeft} alt={'Стрелка в лево'} className={className} style={{
                ...style,
                display: "block", marginLeft: '-440px', width: '50px',
                height: '142px'
            }} onClick={onClick}/>
        </>
    )
}
export const NextArrow = (props: any) => {
    const {className, style, onClick} = props;
    return (
        <>
            <Image src={arrowRight} alt={'Стрелка в право'} className={className} style={{
                ...style,
                display: "block", marginRight: '-60px', width: '50px',
                height: '142px'
            }} onClick={onClick}/>
        </>
    )
}