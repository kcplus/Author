'use client'
import React, {useState} from 'react';
import Header from "../../../components/Header/Header";
import styles from './lightBoxes.module.css'
import arrow from '../../../assets/Vector.svg'
import cat from '../../../assets/Pages/Light-boxes/специалист1 1.svg'
import Image from "next/image";
import {light_boxes_service_arr} from "../../../constants/PagesConstants/Light-boxes/constants";
import TaplinkButton from "../../../components/TaplinkButton/TaplinkButton";
import Button from "../../../components/Button/Button";
import Contact from "../../../components/Contact/Contact";

const LightBoxes = () => {
    const [isHovered, setIsHovered] = useState(null);
    const [click, setClick] = useState(false)
    const marginTop = 50
    const marginLeft = 480

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
                <h1>Световые короба</h1>
                <div className={styles.boxes_block}>
                    {light_boxes_service_arr.map((box) => (
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

export default LightBoxes;