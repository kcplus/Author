import React from 'react';
import styles from './stickers.module.css'
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Large-printing/специалист3 1.svg";
import {stickers_arr} from "../../../constants/PagesConstants/Stickers/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Стикеры",
    description: "Стикеры",
    keywords: [
        'реклама',
        'гомель',
        'гомель реклама',
        'стикеры гомель',
        'стикеры заказать',
        'стикеры заказать гомель',
        'наклейки',
        'наклейки дизайн гомель',
        'наклейки заказать гомель',
        'заказать рекламные наклейки',
        'рекламные наклейки на машину',
        'наружная реклама наклейки',
        'наружная реклама',
        'наклейки на пленке',
        'логотип',
        'рекламные наклейки',
        'рекламные наклейки цена гомель',
        'реклама на авто наклейки на стекло',
        'изготовление рекламных наклеек',
        'изготовление стикеров гомель',
        'рекламные наклейки на магазин',
        'реклама наклейка на стекло автомобиля',
        'заказ рекламных наклеек',
        'наклейки для рекламы',
        'наклейки реклама на авто на заказ',
        'реклама изготовление наклеек',
        'наклейка реклама на заднем стекле автомобиля',
        'рекламная наклейка автомобиль'
    ]
};

const Stickers = () => {
    const marginTop = 33
    const marginLeft = 380

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Стикеры</h1>
                <ServiceImages imagesArray={stickers_arr} cat={cat} marginTop={marginTop} marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default Stickers;