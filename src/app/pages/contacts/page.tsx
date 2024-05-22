import React from 'react';
import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from './contacts.module.css'
import {inst_URL, tiktok_URL} from "../../constants/Constants";
import Image from "next/image";
import OverlayImage from "../../components/OverlayImage/OverlayImage";
import white_inst from "../../assets/Social_icons/кнопка instagram.svg";
import white_tiktok from "../../assets/Social_icons/кнопка тик ток.svg";
import payments from "../../assets/виды оплат.svg";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: "Контакты",
    description: "Напишите нам или отправьте электронное письмо. Мы хотим услышать о вашем проекте и реализовать его в жизнь!",
};
const Contacts = () => {
    return (
        <>
            <OverlayImage contacts={true}>
                <Header contactsPage={true}/>
                <div className={styles.mainBlock}>
                    <div className={styles.textPosition}>
                        <h1 className={styles.title}>Готов с нами поработать?</h1>
                        <span className={styles.text}>Напишите нам или отправьте электронное письмо. Мы хотим услышать о вашем проекте и реализовать его в жизнь!</span>
                    </div>
                    <div className={styles.contactBlockPosition}>
                        <ContactForm/>
                    </div>
                </div>
                <div className={styles.contactBlock}>
                    <div className={styles.contactInfo}>
                        <div className={styles.textBlock}>
                            <span className={styles.textContacts}>4966866@GMAIL.COM</span>
                            <span className={styles.textContacts}
                                  style={{whiteSpace: 'nowrap'}}>+375 (44) 496-68-66</span>
                        </div>
                    </div>
                    <div className={styles.socialsBlock}>
                        <a href={inst_URL}>
                            <Image src={white_inst} style={{cursor: 'pointer'}} alt={'Инстаграмм'} className={styles.socialIcon}/>
                        </a>
                        <a href={tiktok_URL}>
                            <Image src={white_tiktok} style={{cursor: 'pointer'}} alt={'ТикТок'} className={styles.socialIcon}/>
                        </a>
                    </div>
                </div>
                <div className={styles.addressBlock}>
                    <span className={styles.address}>г.ГОМЕЛЬ, ул.Могилевская 2д</span>
                </div>
                <div className={styles.gallery}>
                    <Image src={payments} alt={'Виды оплат'} className={styles.imagesPayment}/>
                </div>
            </OverlayImage>
        </>
    );
};

export default Contacts;