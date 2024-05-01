import React from 'react';
import styles from "./threeD-modeling.module.css";
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Roof-installations/специалист4 1.svg";
import {threeD_modeling_arr} from "../../../constants/PagesConstants/ThreeD-modeling/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "3D моделирование",
    description: "3D моделирование",
    keywords: [
        'реклама',
        'гомель',
        'гомель реклама',
        'наружная реклама',
        'купить 3д панно',
        'фотообои 3д под заказ',
        'купить 3д трафареты',
        'заказ фотообоев 3д',
        '3D визуализация',
        '3D визуализация интерьера',
        '3D визуализация продукции',
        '3D продукции',
        '3D визуализация презентации',
        '3D модели гомель',
        '3D модели на заказ',
        '3D модели на заказ гомель',
    ]
};

const ThreeDModeling = () => {
    const marginTop = 50
    const marginLeft = 380

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>3D моделирование</h1>
                <ServiceImages imagesArray={threeD_modeling_arr} cat={cat} marginTop={marginTop}
                               marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default ThreeDModeling;