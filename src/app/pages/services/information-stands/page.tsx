import React from 'react';
import styles from './information_stands.module.css'
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Light-boxes/специалист1 1.svg";
import {information_stands_arr} from "../../../constants/PagesConstants/Information-stands/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Информационные стенды",
    description: "Информационные стенды",
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
        'пластиковые стенды',
        'стенды охрана труда',
        'стенд уголок потребителя',
        'стенды для организации',
        'уличные стенды',
        'напольный стенды',
        'настенные стенды',
        'настенные стенд',
    ]
};

const InformationStands = () => {
    const marginTop = 50
    const marginLeft = 365

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Информационные стенды</h1>
                <ServiceImages imagesArray={information_stands_arr} cat={cat} marginTop={marginTop}
                               marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default InformationStands;