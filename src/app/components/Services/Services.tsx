'use client'
import React from 'react';
import styles from './services.module.css'
import Image from "next/image";
import {services_array} from "../../constants/Constants";

const Services = () => {

    return (
        <div className={styles.container} id={'services'}>
            <h2 className={styles.mainText}>НАШИ УСЛУГИ</h2>
            <div className={styles.gallery}>
                {services_array.map((item) => (
                    <div className={styles.item} key={item.id}>
                        <div className={styles.itemBox} style={item.id === 6 ? {marginTop: '30px'} : {}}>
                            <a href={item.href}>
                                <Image key={item.id} src={item.value} alt={item.alt}/>
                            </a>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;