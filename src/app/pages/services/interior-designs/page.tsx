import React from 'react';
import styles from './interior.module.css'
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Interior-designs/специалист5 1.svg";
import {interior_designs_arr} from "../../../constants/PagesConstants/Interior-designs/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Интерьерное оформление",
    description: "Интерьерное оформление",
    keywords: [
        'оформление рекламных баннеров',
        'оформление баннеров',
        'реклама',
        'гомель',
        'author',
        'оформление холста',
    ]
};
const InteriorDesigns = () => {
    const marginTop = 50
    const marginLeft = 375

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Интерьерное оформление</h1>
                <ServiceImages imagesArray={interior_designs_arr} cat={cat} marginTop={marginTop}
                               marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default InteriorDesigns;