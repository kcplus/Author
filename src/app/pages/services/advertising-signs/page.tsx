import React from 'react';
import styles from "./advertising.module.css";
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Light-boxes/специалист1 1.svg";
import {adversiting_signs_arr} from "../../../constants/PagesConstants/Advertising-signs/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Рекламные штендеры",
    description: "Рекламные штендеры",
    keywords: [
        'выносные штендеры',
        'штендеры с карманами',
        'односторонние штендеры',
        'двусторонние штендеры',
        'меловые штендеры',
        'деревянные штендеры',
        'металлические штендеры',
        'светодиодные штендеры',
        'штендеры из оргстекла'
    ]
};

const AdversitingSigns = () => {
    const marginTop = 50
    const marginLeft = 365

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Рекламные штендеры</h1>
                <ServiceImages imagesArray={adversiting_signs_arr} cat={cat} marginTop={marginTop}
                               marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default AdversitingSigns;