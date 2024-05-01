import React from 'react';
import styles from './volumetric.module.css'
import Header from "../../../components/Header/Header";
import cat from '../../../assets/Pages/Volumetric-letters/specialist.svg'
import {volumetric_letters_arr} from "../../../constants/PagesConstants/Volumetric-letters/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Обьемные буквы",
    description: "Обьемные буквы",
    keywords: [
        'объемные световые буквы',
        'заказать световые объемные буквы',
        'объемные буквы световые',
        'световые буквы',
        'световые буквы для наружной рекламы',
        'реклама',
        'гомель',
        'буквы',
        'световые',
        'световые буквы пвх',
        'буквы пвх 10 мм',
        'изготовление объемных букв из акрила',
        'объемные буквы из акрила',
        'объемные световые буквы из акрила',
        'буквы из акрила',
        'световые акриловые буквы',
        'световые вывески и объемные буквы',
        'буквы световые объемные',
        'буквы для рекламы',
        'заказать буквы',
        'несветовые объемные буквы',
        'буквы рекламные',
        'вывески наружная реклама объемные буквы',
        'вывески объемные буквы реклама',
        'вывески объемные буквы реклама',
        'вывески наружная реклама объемные буквы',
        'объемные буквы для вывески',
        'реклама объемные буквы цена',
        'виниловые буквы',
        'акриловые объемные буквы',
        'буквы из винила',
        'объемные буквы изготовление',
        'заказать объемные буквы',
        'объемные буквы цена',
        'вывеска объемные буквы',
        'наружная вывеска объемные буквы',
        'объемные буквы реклама',
        'объемные буквы вывеска',
        'наружная реклама объемные буквы',
        'реклама объемные буквы',
        'буквы объемные реклама',
        'объемные буквы печать',
        'буквы световые',
        'вывески световые буквы',
        'несветовые буквы',
        'изготовление наружных букв',
        'наружная реклама буквы',
        'буквы для вывески',
    ]
};

const VolumetricLetters = () => {
    const marginTop = 50
    const marginLeft = 385

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Обьемные буквы</h1>
                <ServiceImages imagesArray={volumetric_letters_arr} cat={cat} marginTop={marginTop}
                               marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default VolumetricLetters;