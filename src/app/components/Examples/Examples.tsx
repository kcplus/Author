'use client'
import React from 'react';
import styles from './examples.module.css'
import arrow from '../../assets/butt.svg'
import Image from "next/image";
import {examples_text} from "../../constants/Constants";
import {SimpleSlider} from "../Slider/Slider";

const Examples = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.textBlock}>
                    {examples_text.map((text, index) => (
                        text === 'ТВОРЧЕСКИЕ ИДЕИ' ? (
                            // eslint-disable-next-line react/jsx-key
                            <span className={styles.block}>
                                <span className={styles.creativeText}>ТВОРЧЕСКИЕ</span>
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
                <Image src={arrow} alt={'Стрелка'}/>
            </div>
        </div>
    );
};

export default Examples;


