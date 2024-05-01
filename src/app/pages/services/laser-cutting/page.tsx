import React from 'react';
import styles from "./laser_cutting.module.css";
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Volumetric-letters/specialist.svg";
import {laser_cutting_arr} from "../../../constants/PagesConstants/Laser-cutting/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Лазерная резка",
    description: "Лазерная резка",
    keywords: [
        'реклама',
        'гомель',
        'гомель реклама',
        'лазерная резка цена',
        'лазерная резка фанеры гомель',
        'лазерная гравировка',
        'лазерная гравировка в гомеле',
        'коробочка из фанеры лазерная резка',
        'лазерная резка из фанеры',
        'чпу лазерная резка',
        'лазерная резка чпу цена',
        'лазерная резка по дереву',
        'резка дерева лазером',
        'резка по дереву лазером' ,
        'лазерная резка на дереве',
        'лазереая резка',
        'резка',
        'лазерная',
        'лазерная резка дерева цена',
        'фигурная резка дерева',
        'лазерное выпиливание по дереву',
        'резьба лазером по дереву',
        'лазерное вырезание по дереву',
        ''
    ]
};

const LaserCutting = () => {
    const marginTop = 50
    const marginLeft = 385

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Лазерная резка</h1>
                <ServiceImages imagesArray={laser_cutting_arr} cat={cat} marginTop={marginTop} marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default LaserCutting;