import React from 'react';
import Image from "next/image";
import first from '../../assets/main.jpg'
import second from '../../assets/коллаж из рекламы.jpg'
import styles from './overlayImage.module.css'

const OverlayImage = ({children}) => {
    return (
        <div className={styles.container}>
            <Image src={first}
                   alt={1}
                   className={styles.image1}
            />
            <Image src={second}
                   alt={2}
                   className={styles.image2}
            />
            <div className={styles.overlayContent}>{children}</div>
        </div>
    );
};

export default OverlayImage;