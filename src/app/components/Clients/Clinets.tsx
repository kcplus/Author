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
                {clients_array.map((item) => (
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

export default Clients;




