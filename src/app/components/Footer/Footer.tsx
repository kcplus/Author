'use client'
import React from 'react';
import styles from './footer.module.css'
import Image from "next/image";
import line from '../../assets/line.svg'
import logo from '../../assets/black_logo.svg'
import inst from '../../assets/Social_icons/instagram.svg'
import tiktok from '../../assets/Social_icons/tik-tok.svg'
import butt from '../../assets/call_me.svg'
import {payments_icon} from "../../constants/Constants";

const Footer = () => {

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={line} alt={'Линия'}/>
                <div className={styles.logo}>
                    <Image src={logo} alt={'Лого'} />
                </div>
            </div>
            <div className={styles.contactBlock}>
                <div className={styles.contactInfo}>
                    <div className={styles.textBlock}>
                        <span className={styles.text}>4966866@GMAIL.COM</span>
                        <span className={styles.text} style={{ whiteSpace: 'nowrap' }}>+375 (44) 496-68-66</span>
                    </div>
                </div>
                <Image src={inst} alt={'Инстаграмм'}/>
                <Image src={tiktok} alt={'ТикТок'}/>
                <button className={styles.button}>
                    <Image src={butt} alt={'Связаться'}/>
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
    );
};

export default Footer;