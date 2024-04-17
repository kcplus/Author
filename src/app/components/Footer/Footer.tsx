'use client'
import React from 'react';
import styles from './footer.module.css'
import Image from "next/image";
import line from '../../assets/line.svg'
import logo from '../../assets/black_logo.svg'
import inst from '../../assets/Social_icons/instagram.svg'
import tiktok from '../../assets/Social_icons/tik-tok.svg'
import butt from '../../assets/call_me.svg'
import {inst_URL, payments_icon, tiktok_URL} from "../../constants/Constants";
import color_logo from '../../assets/color_logo.svg'
import white_butt from '../../assets/Social_icons/кнопка.svg'
import white_inst from '../../assets/Social_icons/кнопка instagram.svg'
import white_tiktok from '../../assets/Social_icons/кнопка тик ток.svg'

const Footer = ({clientPage}) => {

    return (
        <div className={styles.container} style={clientPage === true ? {
            background: 'linear-gradient(to bottom, #000000 0%, #666666 100%)',
            marginTop: '0'
        } : {}}>
            <div style={{top: '300px'}}>
                <div className={styles.imageContainer}>
                    <Image src={line} alt={'Линия'}/>
                    <div className={styles.logo} style={clientPage === true ? {left: '50%'} : {}}>
                        <Image src={clientPage === true ? color_logo : logo} alt={'Лого'}/>
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
                    <a href={inst_URL}>
                        <Image src={clientPage ? white_inst : inst} style={{cursor: 'pointer'}} alt={'Инстаграмм'}/>
                    </a>
                    <a href={tiktok_URL}>
                        <Image src={clientPage ? white_tiktok : tiktok} style={{cursor: 'pointer'}} alt={'ТикТок'}/>
                    </a>
                    <button className={styles.button}>
                        <a href={'/pages/contacts'}>
                            <Image src={clientPage ? white_butt : butt} alt={'Связаться'}/>
                        </a>
                    </button>
                </div>
                <div className={styles.gallery}>
                    {payments_icon.map((item) => (
                        <div className={styles.item} key={item.id}>
                            <div className={styles.itemBox}>
                                <Image key={item.id} src={item.value} alt={item.alt}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;