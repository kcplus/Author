'use client'
import React, {useState} from 'react';
import styles from './advertising_stands_and_pylons.module.css'
import Header from "../../../components/Header/Header";
import Image from "next/image";
import arrow from "../../../assets/Vector.svg";
import Button from "../../../components/Button/Button";
import TaplinkButton from "../../../components/TaplinkButton/TaplinkButton";
import Contact from "../../../components/Contact/Contact";
import cat from "../../../assets/Pages/Tables/специалист2 1.svg";
import {advertising_stands_and_pylons_arr} from "../../../constants/PagesConstants/Advertising-stands-and-pylons/constants";

const AdvertisingStandsAndPylons = () => {
    const [isHovered, setIsHovered] = useState(null);
    const [click, setClick] = useState(false)
    const marginTop = 40
    const marginLeft = 490

    const onClickHandler = () => {
        setClick(!click)
    }

    const onCloseHandler = () => {
        setClick(false)
    }

    const onMouseEnterHandler = (id) => {
        setIsHovered(id)
    }
    const onMouseLeaveHandler = () => {
        setIsHovered(null)
    }

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1>Рекламные стеллы и пилоны</h1>
                <div className={styles.boxes_block}>
                    {advertising_stands_and_pylons_arr.map((box) => (
                        <div key={box.id} style={{position: 'relative'}}>
                            <div className={styles.box}
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
            </div>
            {!click ? (
                <button className={styles.no_background} onClick={onClickHandler}>
                    <TaplinkButton/>
                </button>
            ) : (
                <Contact src={cat} onCloseHandler={onCloseHandler} marginTop={marginTop} marginLeft={marginLeft}/>
            )}
        </div>
    );
};

export default AdvertisingStandsAndPylons;