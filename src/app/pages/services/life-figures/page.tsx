import React from 'react';
import styles from './lifeFigures.module.css'
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Large-printing/специалист3 1.svg";
import {life_figures_arr} from "../../../constants/PagesConstants/Life-figures/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Ростовые фигуры",
    description: "Ростовые фигуры",
    keywords: [
        'реклама',
        'гомель',
        'гомель реклама',
        'фигуры на картоне',
        'фигуры на пвх',
        'фигуры на ПВХ',
        'фигуры из пенолласта',
        'фигуры на фанере',
        'фигуры',
        'ростовые',
        'ростовые фигуры',
        'author',
        'фигуры человека'
    ]
};
const LifeFigures = () => {
    const marginTop = 33
    const marginLeft = 370

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Ростовые фигуры</h1>
                <ServiceImages imagesArray={life_figures_arr} cat={cat} marginTop={marginTop} marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default LifeFigures;