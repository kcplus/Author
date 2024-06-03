'use client'
import React from 'react';
import styles from './examples.module.css'
import arrow from '../../assets/butt.svg'
import Image from "next/image";
import {examples_text} from "../../constants/Constants";
import {SimpleSlider} from "../Slider/Slider";
import creative from '../../assets/творческие.svg'

const Examples = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.textBlock}>
                    {examples_text.map((text, index) => (
                        text === 'ТВОРЧЕСКИЕ ИДЕИ' ? (
                            // eslint-disable-next-line react/jsx-key
                            <span className={styles.block}>
                                 <Image src={creative} alt="" className={styles.imageCreative}/>
                                 <span className={styles.spanTextDouble}> ИДЕИ</span>
                            </span>
                        ) : (
                            <span key={index} className={styles.spanText}>{text}</span>
                        )
                    ))}
                </div>
            </div>
                <SimpleSlider/>
            <div className={styles.imageConnected}>
                <a href={'/pages/portfolio'}>
                    <Image src={arrow} alt={'Стрелка'} className={styles.imageConnectedStyle}/>
                </a>
            </div>
        </div>
    );
};

export default Examples;


