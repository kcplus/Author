import React from 'react';
import Image from "next/image";
import first from '../../assets/main.jpg'
import second from '../../assets/коллаж из рекламы.jpg'
import styles from './overlayImage.module.css'
import background from '../../assets/фон.jpg'
import contact from '../../assets/коллаж из рекламы3.jpg'

const OverlayImage = ({children, contacts}: any) => {
    return (
        <div className={styles.container} style={contacts === true ? {minHeight: '100%'} : {}}>
            {contacts === true ? (
                <Image src={background}
                       alt={'Фон'}
                       className={styles.image1}
                       style={contacts === true ? {minHeight: '100%'} : {}}
                />
            ) : (
                <Image src={first}
                       alt={'Фон'}
                       className={styles.image1}
                />
            )}
            <div className={contacts === true ? styles.imageCLientContainer : styles.image2Container}>
                <Image src={contacts === true ? contact : second}
                       alt={'Картинка'}
                       className={styles.image2}
                       style={contacts === true ? {minHeight: '100%'} : {}}
                />
            </div>
            <div className={styles.overlayContent}>{children}</div>
        </div>
    );
};

export default OverlayImage;