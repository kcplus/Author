import React from 'react';
import styles from './main.module.css'
import marker from '../../assets/marker.svg'
import Image from "next/image";
import hand1 from '../../assets/hand1.svg'
import hand2 from '../../assets/hand2.svg'


const Main = () => {

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
                <div>
                    <Image src={hand1} alt={"Рука1"} className={styles.hand_one}/>
                </div>
                <div>
                    <Image src={hand2} alt={"Рука2"} className={styles.hand_two}/>
                </div>
            </div>
        </div>
    );
};

export default Main;