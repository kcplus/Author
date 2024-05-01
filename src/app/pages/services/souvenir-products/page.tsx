import React from 'react';
import styles from './souvenir-products.module.css'
import Header from "../../../components/Header/Header";
import cat from "../../../assets/Pages/Light-boxes/специалист1 1.svg";
import {souvenir_products_arr} from "../../../constants/PagesConstants/Souvenir-products/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Сувенирная продукция",
    description: "Сувенирная продукция",
    keywords: [
        'реклама',
        'гомель',
        'гомель реклама',
        'сувениры',
        'сувениры гомель',
        'брендированние',
        'кубки',
        'медали',
        'брелки',
        'корпоративные сувениры',
        'корпоративные сувениры подарки',
        'корпоративные подарки',
        'промо сувениры',
        'промо',
        'сувениры из фанеры лазером',
    ]
};

const SouvenirProducts = () => {
    const marginTop = 50
    const marginLeft = 370

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Сувенирная продукция</h1>
                <ServiceImages imagesArray={souvenir_products_arr} cat={cat} marginTop={marginTop}
                               marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default SouvenirProducts;