import React from 'react';
import styles from './design-services.module.css'
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Large-printing/специалист3 1.svg";
import {design_services_arr} from "../../../constants/PagesConstants/Design-services/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Услуги дизайна",
    description: "Услуги дизайна",
    keywords: [
        'реклама',
        'гомель',
        'гомель реклама',
        'услуги дизайна',
        'услуги дизайна гомель',
        'дизайн логотипа',
        'дизайн фирменного стиля',
        'полиграфический дизайн',
        'дизайн наружной рекламы',
        'наружная реклама',
        'наружная реклама гомель',
        'дизайн наружной рекламы гомель',
        'дизайн упаковки',
        'дизайн этикетки',
        'дизайн соц. сетей',
        'дизайн социальных сетей',
        'дизайн презентаций',
        'инфографика',
        'дизайн инфографики гомель',
        'дизайнер рекламных баннеров',
        'дизайн рекламных баннеров',
        'дизайн баннеров цена',
        'дизайн баннеров гомель',
        'дизайн и печать баннеров гомель',
        'дизайн и печать баннеров',
        'дизайн макета баннера',
        'трафареты для дизайна стен',
        'стоимость баннера дизайн',
        'дизайн рекламных баннеров',
        'дизайн баннеров',
        'цена за дизайн баннера',
    ]
};

const DesignServices = () => {
    const marginTop = 33
    const marginLeft = 380

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Услуги дизайна</h1>
                <ServiceImages imagesArray={design_services_arr} cat={cat} marginTop={marginTop}
                               marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default DesignServices;