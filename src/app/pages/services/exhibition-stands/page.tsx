import React from 'react';
import styles from "./exhibitionStands.module.css";
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Interior-designs/специалист5 1.svg";
import {exhibition_stands_arr} from "../../../constants/PagesConstants/Exhibition-stands/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Выставочные стенды",
    description: "Выставочные стенды",
    keywords: [
        'реклама',
        'гомель',
        'гомель реклама',
        'пластиковые стенды',
        'стенд',
        'стенды',
        'стенды цена',
        'дешево',
        'школьные информационные стенды',
        'пластиковые стенды для школы',
        'стенды на заказ',
        'информационные стенды для детского сада',
        'информационные стенды для офиса',
        'мобильные стенды Pop up',
        'pop up',
        'мобильные стенды roll up',
        'мобильные стенды Roll up',
        'мобильные стенды fold up',
        'мобильные стенды Fold up',
        'эксклюзивные выставочные стенды',
        'уличные информационные стенды и щиты',
        'уличные информационные стенды с дверцами',
        'информационный стенд для школы',
        'информационный стенд пвх',
        'информационный стенд с козырьком',
        'наружная реклама рб',
        'изготовление стендов',
        'напольный стенд',
        'стенд изготовление',
        'пластиковые стенды'
    ]
};

const ExhibitionStands = () => {
    const marginTop = 50
    const marginLeft = 370

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Выставочные стенды</h1>
                <ServiceImages imagesArray={exhibition_stands_arr} cat={cat} marginTop={marginTop}
                               marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default ExhibitionStands;