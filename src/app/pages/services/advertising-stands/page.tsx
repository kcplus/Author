import React from 'react';
import styles from "../advertising-signs/advertising.module.css";
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Roof-installations/специалист4 1.svg";
import {advertising_stands_arr} from "../../../constants/PagesConstants/Advertising-stands/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Рекламные стойки",
    description: "Рекламные стойки",
    keywords: [
        'стойки из оргстекла',
        'реклама',
        'наружная реклама',
        'гомель',
        'бренд зона',
        'промо стойки',
        'стойки',
        'картонные стойки',
        'информационные стойки',
        'стойки из металла',
        'пластиковые стойки',
        'стойки из дерева',
        'торговые стойки',
        'уличные стойки',
        'стойки на АЗС',
        'стойки для буклетов',
        'стойки для ветрин магазинов',
        'стойки ресепшн'
    ]
};

const AdvertisingStands = () => {
    const marginTop = 50
    const marginLeft = 375

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Рекламные стойки</h1>
                <ServiceImages imagesArray={advertising_stands_arr} cat={cat} marginTop={marginTop}
                               marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default AdvertisingStands;