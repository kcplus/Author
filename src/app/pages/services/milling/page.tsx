import React from 'react';
import styles from "./milling.module.css";
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Volumetric-letters/specialist.svg";
import {milling_arr} from "../../../constants/PagesConstants/Milling/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Фрезеровка",
    description: "Фрезеровка",
    keywords: [
        'реклама',
        'гомель',
        'гомель реклама',
        'фрезеровка мдф на заказ',
        'фрезеровка',
        'фрезеровка по фанере',
        'фрезеровка по фанере',
        'фрезеровка из фанеры',
        'фрезерная резка фанеры цена',
        'фрезерная порезка фанеры',
        'лазерная фрезеровка фанеры',
        'фрезеровка фанеры',
        'фрезеровка чпу фанера',
        'фрезерная резка фанеры на заказ',
        'фрезерная резка по фанере',
        'раскрой фрезеровка фанеры',
        'фрезерная резка фанеры',
        'фрезеровка фанеры цена',
        'фрезеровка фанеры стоимость',
        'фрезеровка фанеры стоимость',
        'цена фрезеровки фанеры',
        'фрезерный раскрой фанеры',
        'раскрой и фрезеровка фанеры',
        'фрезеровка раскрой фанеры',
        'фрезеровка пвх',
        'фрезеровка пластика',
        'услуги фрезеровки чпу',
        'фрезеровка на чпу на заказ',
        'фрезеровка лазером',
        'фрезерная резка дерева',
        'фрезеровка по дереву цена',
        'фрезеровка по дереву чпу',
        'фрезеровка на заказ',
        'резка на фрезерном станке',
        'фрезерная резка пластика',
        'фрезерная резка цена'
    ]
};

const Milling = () => {
    const marginTop = 50
    const marginLeft = 385

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Фрезеровка</h1>
                <ServiceImages imagesArray={milling_arr} cat={cat} marginTop={marginTop} marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default Milling;