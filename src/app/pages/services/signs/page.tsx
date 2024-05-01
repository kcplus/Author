import React from 'react';
import styles from './signs.module.css'
import Header from "../../../components/Header/Header";
import cat from '../../../assets/Pages/Signs/специалист2 1.svg'
import {signs_array} from "../../../constants/PagesConstants/Signs/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Вывески",
    description: "Вывески",
    keywords: [
        'вывески',
        'вывеска',
        'Гомель',
        'реклама',
        'световые вывески',
        'вывеска для магазина с подсветкой',
        'заказать',
        'изготовление световой вывески',
        'вывески на продуктовый',
        'световая вывеска заказать',
        'обьемные световые вывески',
        'вывески световые короба',
        'рекламные вывески баннеры',
        'баннеры вывески',
        'изготовление наружной вывески',
        'светодиодные вывески',
        'световые вывески гомель',
        'вывески на ресторанах',
        'вывески на шиномонтаж',
        'световые вывески и обьемные буквы',
        'вывески наружная реклама',
        'баннеры вывески таблички',
        'вывески наружная реклама обьемные буквы',
        'изготовление вывески',
        'изготовление вывески реклама',
        'цена вывески',
        'стоимость изготовления вывески',
        'цены на наружные вывески',
        'обьемные буквы для вывески',
        'монтаж вывески',
        'вывески для пива',
        'вывеска для офиса',
        'вывеска для салона',
        'вывеска для аптеки',
        'вывеска для автозапчастей',
        'вывеска на отель',
        'вывеска на продукты',
        'вывеска для стоматологии',
        'вывеска на пекарню',
        'вывеска на баню',
        'вывеска на кондитерскую',
        'вывеска для столовой',
        'вывеска для автомойки',
        'вывески для бани',
        'вывеска на продуктовый магазин',
        'вывеска для ип',
        'вывеска для кондитерской',
        'вывеска на автомойку'
    ]
};
const Signs = () => {
    const marginTop = 33
    const marginLeft = 370

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Вывески</h1>
                <ServiceImages imagesArray={signs_array} marginTop={marginTop} marginLeft={marginLeft} cat={cat}/>
            </div>
        </div>
    );
};

export default Signs;