'use client'
import React from 'react';
import styles from './clients.module.css'
import Image from "next/image";
import {clients_array} from "../../constants/Constants";

const Clients = () => {

    return (
        <div className={styles.container}>
            <h2 className={styles.mainText}>НАШИ КЛИЕНТЫ</h2>
            <div className={styles.gallery}>
                {/*{clients_array.map((item) => (
                    <div className={styles.item} key={item.id}>
                        <div className={styles.itemBox}>
                                <Image
                                    key={item.id}
                                    src={item.value}
                                    alt={item.alt}
                                    style={item.id === 5 || item.id === 7 ? {marginTop: '-20px'} : item.id === 9 ? {marginTop: '37px', marginLeft: '15px'} : {}}
                                />
                        </div>
                    </div>
                ))}*/}
            </div>
        </div>
    );
};

export default Clients;




