import React from 'react';
import styles from './engraving.module.css'
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Roof-installations/специалист4 1.svg";
import {engraving_arr} from "../../../constants/PagesConstants/Engraving/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Гравировка",
    description: "Гравировка",
    keywords: [
        'реклама',
        'гомель',
        'гомель реклама',
        'гравировка по дереву',
        'гравировка на металле',
        'гравировка на металле гомель',
        'гравировка гомель',
        'лазерная гравировка',
        'лазерная гравировка в гомеле',
        'гравировка на заказ',
        'фрезеровка гравировка',
        'лазерная гравировка гомель',
        'гравировка на пластике',
        'гравировка на коже',
        'гравировка на древесине',
        'гравировка на фанере',
        'гравировка на любых металлах',
    ]
};

const Engraving = () => {
    const marginTop = 50
    const marginLeft = 380

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Гравировка</h1>
                <ServiceImages imagesArray={engraving_arr} cat={cat} marginTop={marginTop} marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default Engraving;