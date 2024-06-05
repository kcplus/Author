'use client'
import React, {useState} from 'react';
import styles from './main.module.css'
import marker from '../../assets/marker.svg'
import Image from "next/image";
import hand3 from '../../assets/рука1.svg'
import hand4 from '../../assets/рука2.svg'
import {MouseParallax} from 'react-just-parallax';

const Main = () => {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)
    return (
        <div className={styles.container}>
            <div className={styles.textBlock}>
                <h1 className={styles.h1}>Производим</h1>
                <h2 className={styles.h2}>рекламу</h2>
                <h3 className={styles.h3}>13 лет</h3>
                <Image src={marker} alt={'Маркер'} className={styles.image}/>
                <div className={styles.container_text}>
                    <div className={styles.text}>Мы креативная команда,</div>
                    <div className={styles.text}>готовая воплотить все ваши идеи в жизнь</div>
                </div>
                <a href={'pages/contacts'}>
                    <button className={styles.button}>
                        Связь с менеджером
                    </button>
                </a>
                {width > 430 ? (
                    <>
                        <div>
                            <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.25}>
                                <Image src={hand3} alt={"Рука1"} className={styles.hand_one} width={900} height={600}/>
                            </MouseParallax>
                        </div>
                        <div>
                            <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.10}>
                                <Image src={hand4} alt={"Рука2"} className={styles.hand_two} width={900} height={800}/>
                            </MouseParallax>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <Image src={hand3} alt={"Рука1"} className={styles.hand_one} width={900} height={500}/>

                        </div>
                        <div>
                            <Image src={hand4} alt={"Рука2"} className={styles.hand_two} width={900} height={650}/>
                        </div>
                    </>
                )
                }
            </div>
        </div>
    )
        ;
};

export default Main;