import React from 'react';
import styles from "./panelBracket.module.css";
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Volumetric-letters/specialist.svg";
import {panel_bracket_arr} from "../../../constants/PagesConstants/Panel-bracket/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Панель-кронштейн",
    description: "Панель-кронштейн",
    keywords: [
        'реклама',
        'гомель',
        'гомель реклама',
        'панель',
        'кронштейн',
        'панель-кронштейн',
        'панель кронштейн',
        'Панель-кронштейны',
        'двусторонние панель кронштейны',
        'двусторонние панель-кронштейны',
        'фигурные панель кронштейны',
        'фигурные панель-кронштейны',
        'панель кронштейн с подсветкой',
        'панель-кронштейн с подсветкой',
        'панель-кронштейны с подсветкой',
    ]
};

const PanelBracket = () => {
    const marginTop = 50
    const marginLeft = 385

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Панель-кронштейн</h1>
                <ServiceImages imagesArray={panel_bracket_arr} cat={cat} marginTop={marginTop} marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default PanelBracket;