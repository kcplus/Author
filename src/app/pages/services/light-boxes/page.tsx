import React from 'react';
import Header from "../../../components/Header/Header";
import styles from './lightBoxes.module.css'
import {light_boxes_service_arr} from "../../../constants/PagesConstants/Light-boxes/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import cat from "../../../assets/Pages/Light-boxes/специалист1 1.svg";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Световые короба",
    description: "Световые короба",
    keywords: [
        'наружная реклама световые короба',
        'световые короба',
        'Гомель',
        'реклама',
        'световые лайт боксы',
        'световые буквы',
        'заказать',
        'световые буквы реклама',
        'световые буквы заказать',
        'световой короб лайтбокс',
        'изготовление',
        'изготовление световых лайтбоксов',
        'вывеска',
        'наружная реклама световые буквы',
        'световые',
        'буквы'
    ]
};
const LightBoxes = () => {
    const marginTop = 50
    const marginLeft = 370

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Световые короба</h1>
                <ServiceImages imagesArray={light_boxes_service_arr} marginTop={marginTop} marginLeft={marginLeft}
                               cat={cat}/>
            </div>
        </div>
    );
};

export default LightBoxes;