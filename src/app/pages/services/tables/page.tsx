import React from 'react';
import styles from "./tables.module.css";
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Signs/специалист2 1.svg";
import {tables_arr} from "../../../constants/PagesConstants/Tables/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Таблчики",
    description: "Таблички",
    keywords: [
        'таблички',
        'реклама',
        'гомель',
        'информационные таблички',
        'сменные таблички',
        'световые таблички',
        'таблички из пластика',
        'таблички из металла',
        'табличка организация',
        'таблички на двери',
        'таблички на ручку двери',
        'адресные таблички',
        'домовые знаки',
        'баннеры вывески таблички',
        'вывески таблички изготовление',
        'заказать вывески таблички',
    ]
};

const Tables = () => {
    const marginTop = 33
    const marginLeft = 370

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Таблички</h1>
                <ServiceImages imagesArray={tables_arr} cat={cat} marginTop={marginTop} marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default Tables;