'use client'
import React from 'react';
import Header from "../../components/Header/Header";
import styles from './about.module.css'
import {about_text_array} from "../../constants/Constants";
import poster from '../../assets/постер.jpg'
import vector from '../../assets/Vector.svg'
import Image from "next/image";
import HighlightKeywords from "../../components/HighlightKeywords/HighlightKeywords";

const About = () => {
    return (
        <div className={styles.gradientBackground}>
            <Header/>
            <div className={styles.infoBlock}>
                <div style={{width: '900px'}}>
                    <Image src={poster} alt={'Постер'} width={900} height={1500} className={styles.posterStyle}/>
                    <div className={{width: '500px'}}>
                        <span className={`${styles.textStyle} ${styles.text1}`}>БОЛЕЕ 5000 м2 переработанно материалов</span>
                        <span className={`${styles.textStyle} ${styles.text2}`}>БОЛЕЕ 80 км раскроя по периметру</span>
                        <span className={`${styles.textStyle} ${styles.text3}`}>БОЛЕЕ 2000 вывесок изготовлено</span>
                    </div>
                </div>
                <div className={styles.textBlock}>
                    <div className={styles.infoBlock}>
                        <h1 className={styles.title}>О НАС</h1>
                        <Image src={vector} alt={'Вектор'} className={styles.vectorStyle}/>
                    </div>
                    <HighlightKeywords textArray={about_text_array}/>
                </div>
            </div>
        </div>
    );
};

export default About;

