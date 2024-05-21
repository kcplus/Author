'use client'
import React, {useEffect, useState} from 'react';
import styles from './footer.module.css'
import Image from "next/image";
import line from '../../assets/line.svg'
import logo from '../../assets/black_logo.svg'
import inst from '../../assets/Social_icons/instagram.svg'
import tiktok from '../../assets/Social_icons/tik-tok.svg'
import butt from '../../assets/call_me.svg'
import {inst_URL, tiktok_URL} from "../../constants/Constants";
import color_logo from '../../assets/color_logo.svg'
import white_butt from '../../assets/Social_icons/кнопка.svg'
import white_inst from '../../assets/Social_icons/кнопка instagram.svg'
import white_tiktok from '../../assets/Social_icons/кнопка тик ток.svg'
import payments from '../../assets/виды оплат.svg'
import vector from '../../assets/Vector.svg'

const Footer = ({clientPage}: any) => {
    const [width, setWidth] = useState<number>(0)

    useEffect(() => {
        setWidth(window.innerWidth);
    }, [window.innerWidth]);

    console.log(width, 'WIDTH');

    return (
        <div className={styles.container} style={clientPage === true ? {
            background: 'linear-gradient(to bottom, #000000 0%, #666666 100%)',
            marginTop: '0'
        } : {}}>
            {width === 414 || 375 ? (
                <div>
                    <div>
                        <span className={styles.spanStyle}>Жми, чего ждешь?</span>
                        <Image src={vector} alt={''} className={styles.vectorStyle}/>
                    </div>
                    <div className={styles.infoBlock}>
                        Готов с нами поработать?
                    </div>
                </div>
            ) : null}
            <div style={{top: '300px'}}>
                <div className={styles.imageContainer}>
                    <Image src={line} alt={'Линия'} className={styles.styleLine}/>
                    <div className={styles.logo} style={clientPage === true ? {left: '49%'} : {}}>
                        <Image src={clientPage === true ? color_logo : logo} alt={'Лого'}
                               width={clientPage ? 335 : undefined}
                               height={clientPage ? 103 : undefined} className={styles.styleLogo}/>
                    </div>
                </div>
                <div className={styles.contactBlock}>
                    <div className={styles.contactInfo}>
                        <div className={styles.textBlock}>
                            <span className={styles.text}
                                  style={clientPage ? {color: 'white'} : {}}>4966866@GMAIL.COM</span>
                            <span className={styles.text}
                                  style={clientPage ? {color: 'white', whiteSpace: 'nowrap'} : {whiteSpace: 'nowrap'}}>+375 (44) 496-68-66</span>
                        </div>
                    </div>
                    <a href={inst_URL} target={'_blank'}>
                        <Image src={clientPage ? white_inst : inst} style={{cursor: 'pointer'}} alt={'Инстаграмм'}
                               className={styles.imageInst}/>
                    </a>
                    <a href={tiktok_URL} target={'_blank'}>
                        <Image src={clientPage ? white_tiktok : tiktok} style={{cursor: 'pointer'}} alt={'ТикТок'}
                               className={styles.imageTikTok}/>
                    </a>
                    <button className={styles.button}>
                        <a href={'/pages/contacts'}>
                            <Image src={clientPage ? white_butt : butt} alt={'Связаться'}/>
                        </a>
                    </button>
                </div>
                <div className={styles.gallery}>
                    <Image src={payments} alt={'Виды оплат'} style={{}} className={styles.imagePayment}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;