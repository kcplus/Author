import React from 'react';
import styles from './advertising_stands_and_pylons.module.css'
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Tables/специалист2 1.svg";
import {advertising_stands_and_pylons_arr} from "../../../constants/PagesConstants/Advertising-stands-and-pylons/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Рекламные стеллы и пилоны",
    description: "Рекламные стеллы и пилоны",
    keywords: [
        'реклама',
        'гомель',
        'гомель реклама',
        'реклама',
        'рекламные стеллы',
        'рекламные стеллы на АЗС',
        'рекламные стеллы на азс',
        'информационные стеллы',
        'стеллы',
        'пилоны',
        'уличные стеллы',
        'стеллы для торгового центра',
        'стеллы для автосервиса',
        'пилоны'
    ]
};

const AdvertisingStandsAndPylons = () => {
    const marginTop = 40
    const marginLeft = 380

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Рекламные стеллы и пилоны</h1>
                <ServiceImages imagesArray={advertising_stands_and_pylons_arr} cat={cat} marginTop={marginTop}
                               marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default AdvertisingStandsAndPylons;