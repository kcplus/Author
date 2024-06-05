'use client'
import Image from "next/image";
import arrowLeft from "../../assets/VectorLeft.svg";
import arrowRight from "../../assets/VectorRight.svg";
import styles from '../Slider/slider.module.css'
import React from "react";

export const PrevArrow = (props: any) => {
    const {className, style, onClick} = props;
    return (
        <>
            <Image src={arrowLeft} alt={'Стрелка в лево'} className={[className, styles.prevArrow].join(' ')}
                   style={{...style}}
                   onClick={onClick}/>
        </>
    )
}
export const NextArrow = (props: any) => {
    const {className, style, onClick} = props;
    return (
        <>
            <Image src={arrowRight} alt={'Стрелка в право'} className={[className, styles.nextArrow].join(' ')}
                   style={{...style}}
                   onClick={onClick}/>
        </>
    )
}