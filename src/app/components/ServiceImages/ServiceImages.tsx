'use client'
import React, {useState} from 'react';
import styles from './serviceImages.module.css'
import Image from "next/image";
import arrow from "../../assets/Vector.svg";
import Button from "../Button/Button";
import TaplinkButton from "../TaplinkButton/TaplinkButton";
import Contact from "../Contact/Contact";
import cat from "../../assets/Pages/Light-boxes/специалист1 1.svg";

const ServiceImages = ({imagesArray, marginTop, marginLeft, cat}: any) => {
    const [isHovered, setIsHovered] = useState(null);
    const [click, setClick] = useState(false)

    const onClickHandler = () => {
        setClick(!click)
    }

    const onCloseHandler = () => {
        setClick(false)
    }

    const onMouseEnterHandler = (id: any) => {
        setIsHovered(id)
    }
    const onMouseLeaveHandler = () => {
        setIsHovered(null)
    }
    return (
        <>
            <div className={styles.boxes_block}>
                {imagesArray.map((box) => (
                    <div key={box.id} style={{position: 'relative'}}>
                        <div
                            className={styles.box}
                            onMouseEnter={() => onMouseEnterHandler(box.id)}
                            onMouseLeave={() => onMouseLeaveHandler()}
                        >
                            <span className={styles.text}>{box.value}</span>
                            <Image src={arrow} alt={'Стрелка'} className={styles.image_style}/>
                            <Image src={box.image} alt={'Изображение товара'}
                                   className={isHovered === null || isHovered !== box.id ? styles.imageBlock : styles.imageBlockEnter}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.button}>
                <Button>Заказать</Button>
            </div>
            {!click ? (
                <button className={styles.no_background} onClick={onClickHandler}>
                    <TaplinkButton/>
                </button>
            ) : (
                <Contact src={cat} onCloseHandler={onCloseHandler} marginTop={marginTop} marginLeft={marginLeft}/>
            )}
        </>
    );
};

export default ServiceImages;