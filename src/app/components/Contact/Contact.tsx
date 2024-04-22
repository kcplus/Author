import React from 'react';
import styles from "./contact.module.css";
import Image from "next/image";
import viberIcon from "../../assets/image 23.svg";
import whatsupIcon from "../../assets/image 24.svg";
import telegramIcon from "../../assets/free-icon-telegram-2111646 2.svg";
import closeIcon from "../../assets/связь с менеджером закрытие.svg";

const Contact = ({src, onCloseHandler, marginTop, marginLeft}: any) => {
    return (
        <div className={styles.contact_block}>
            <div className={styles.socialIcons}>
                <button className={styles.iconViber}>
                    <a href={'viber://chat?number=%2B375444966866'}>
                        <Image src={viberIcon} alt={'Вайбер'} width={40} height={40}/>
                    </a>
                </button>
                <button className={styles.iconWhatsUp}>
                    <a href={'https://wa.me/375444966866'}>
                        <Image src={whatsupIcon} alt={'Вотсап'} width={40} height={40}/>
                    </a>
                </button>
                <button className={styles.iconTelegram}>
                    <a href={'tg://resolve?domain=authorstudia'}>
                        <Image src={telegramIcon} alt={'Телеграмм'} width={40} height={40}/>
                    </a>
                </button>
            </div>
            <button className={styles.closeIcon} style={{marginLeft: marginLeft}}>
                <Image src={closeIcon} alt={'Закрытие'} width={150} height={150}/>
            </button>
            <button onClick={onCloseHandler} className={styles.transparentButton}/>
            <Image src={src} alt={'Кот контакт'} className={styles.image_cat} style={{marginTop: marginTop}}/>
        </div>
    );
};

export default Contact;