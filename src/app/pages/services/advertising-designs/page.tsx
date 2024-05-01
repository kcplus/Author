import React from 'react';
import styles from './advertising_designs.module.css'
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Tables/специалист2 1.svg";
import {advertising_designs_arr} from "../../../constants/PagesConstants/Advertising-designs/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Рекламные конструкции",
    description: "Рекламные конструкции",
    keywords: [
        'реклама',
        'гомель',
        'гомель реклама',
        'рекламные конструкции наружная реклама',
        'реклама изготовление',
        'реклама на заказ',
        'рекламные конструкции',
        'установка рекламной конструкции',
        'рекламные вывески конструкции',
        'конструкции из оргстекла на заказ',
        'конструкции',
        'конструкциыя',
        'нестандартные конструкции',
        'световые рекламные конструкции',
        'согласование'
    ]
};

const AdvertisingDesigns = () => {
    const marginTop = 40
    const marginLeft = 370

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Рекламные конструкции</h1>
                <ServiceImages imagesArray={advertising_designs_arr} cat={cat} marginLeft={marginLeft} marginTop={marginTop}/>
            </div>
        </div>
    );
};

export default AdvertisingDesigns;