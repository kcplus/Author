'use client'
import React, {useState} from 'react';
import styles from './serviceImages.module.css'
import Image from "next/image";
import arrow from "../../assets/Vector.svg";
import Button from "../Button/Button";
import TaplinkButton from "../TaplinkButton/TaplinkButton";
import Contact from "../Contact/Contact";
import viberIcon from '../../assets/vb.jpg'
import whatsupIcon from "../../assets/wu.jpg";
import telegramIcon from "../../assets/tg.jpg";

const ServiceImages = ({imagesArray, marginTop, marginLeft, cat}: any) => {
    const [isHovered, setIsHovered] = useState(null);
    const [click, setClick] = useState(false)
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

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
                {imagesArray.map((box: any) => (
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
            {width <= 430 ? (
                <div className={styles.contactBlock}>
                    <span className={styles.questionsTitle}>Есть вопросы?</span>
                    <div style={{marginTop: '20px', marginLeft: '-30px'}}>
                        <button className={styles.buttonSocial}>
                            <a href={'viber://chat?number=%2B375444966866'} target={'_blank'}>
                                <Image src={viberIcon} alt={'Вайбер'} width={64} height={64}/>
                            </a>
                        </button>
                        <button className={styles.buttonSocial}>
                            <a href={'https://wa.me/375444966866'} target={'_blank'}>
                                <Image src={whatsupIcon} alt={'Вотсап'} width={64} height={64}/>
                            </a>
                        </button>
                        <button className={styles.buttonSocial}>
                            <a href={'tg://resolve?domain=authorstudia'} target={'_blank'}>
                                <Image src={telegramIcon} alt={'Телеграмм'} width={64} height={64}/>
                            </a>
                        </button>
                    </div>
                </div>
            ) : (
                !click ? (
                    <button className={styles.no_background} onClick={onClickHandler}>
                        <TaplinkButton/>
                    </button>
                ) : (
                    <Contact src={cat} onCloseHandler={onCloseHandler} marginTop={marginTop} marginLeft={marginLeft}/>
                )
            )}
        </>
    );
};

export default ServiceImages;