'use client'
import React from 'react';
import Header from "../../components/Header/Header";
import vector from '../../assets/Vector.svg'
import Image from "next/image";
import styles from './portfolio.module.css'

const Portfolio = () => {

    return (
        <div>
            <Header services={true}/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1 className={styles.title}>Наши работы</h1>
            <Image src={vector} alt={'VECTOR'} style={{position: 'absolute', right: '580px', top: '172px'}}/>
            </div>
        </div>
    );
};

export default Portfolio;