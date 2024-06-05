import React from 'react';
import Header from "../../components/Header/Header";
import styles from './about.module.css'
import {about_text_array} from "../../constants/Constants";
import poster from '../../assets/постер.jpg'
import vector from '../../assets/Vector.svg'
import Image from "next/image";
import HighlightKeywords from "../../components/HighlightKeywords/HighlightKeywords";
import Footer from "../../components/Footer/Footer";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "О нас",
    description: "Мы креативная команда, готовая воплотить все ваши идеи в жизнь",
};
const About = () => {
    return (
        <>
            <div className={styles.container}>
                <Header clientPage={true}/>
                <div className={styles.infoBlock}>
                    <div style={{width: '900px'}}>
                        <Image src={poster} alt={'Постер'} width={900} height={1500} className={styles.posterStyle}/>
                        <div className={styles.colorTextBlock}>
                        <span className={`${styles.textStyle} ${styles.text1}`}>
                            <span className={styles.textTest}>БОЛЕЕ 5000 м2</span> переработанно материалов</span>
                            <span className={`${styles.textStyle} ${styles.text2}`}>
                            <span className={styles.textTest}>БОЛЕЕ 80 км</span> раскроя по периметру</span>
                            <span className={`${styles.textStyle} ${styles.text3}`}>
                            <span className={styles.textTest}>БОЛЕЕ 2000</span> вывесок изготовлено</span>
                        </div>
                    </div>
                    <div className={styles.textBlock}>
                        <div className={styles.block}>
                            <h1 className={styles.title}>О НАС</h1>
                            <Image src={vector} alt={'Вектор'} className={styles.vectorStyle}/>
                        </div>
                        <HighlightKeywords textArray={about_text_array}/>
{/*                        <>*/}
{/*                        <span>В 2011 году Крюков Максим Сергеевич основал компанию по изготовлению рекламной продукции. Долгие годы компания работала без названия. В рекламных кругах предпринимателя прозвали Комбинатор. Такое прозвище дали не случайно – для Максима нет нерешаемых задач, скомбинирует пожелания заказчика с техническими возможностями, найдет решение там, где казалось его нет. В тот момент появилось название «Комбинатор». */}

{/*С 2012 по 2013 собрал команду таких же специалистов, как и сам Максим, умеющих нестандартно и творчески мыслить. Это получился очень сплоченный и эффективный коллектив, который работает и по сей день. */}

{/*Максим долгие годы «варился» в рекламном деле и в полной мере прочувствовал всю боль и потребности клиентов. Именно поэтому в 2023 году принял решение вывести производство на новый уровень.*/}

{/*Был произведен ребрендинг и сейчас вы знаете нашу компанию как АВТОР СТУДИЯ.*/}


{/*На сегодняшний день мы единственные в Гомеле, которая способна выполнить раскрой, гравировку и фрезеровку крупных листовых материалов вплоть до 6 метров в длину и обеспечить точность размеров до 0,05 мм. */}

{/*Технологичное оборудование и опыт сотрудников компании позволило заказчикам реализовать самые смелые идеи. Благодаря возможности вырезать элементы сразу в масштабе, без стыковки нескольких кусков, обеспечивается долгий период эксплуатации за счет отличной герметичности конструкции. Мы даем гарантию на нашу продукцию от 12 месяцев. В случае возникновения гарантийного случая приедем и отремонтируем изделие за свой счет. */}

{/*Мы несем ответственность за качество выпускаемой продукции и соблюдение сроков. Все условия прописываем в договоре. Благодаря таким выгодным условиям, высокому качеству нас и выбирают.*/}
{/*Звоните и мы сделаем все на высшем уровне!</span>*/}
{/*                        </>*/}
                    </div>
                </div>
            </div>
            <Footer clientPage={true}/>
        </>
    );
};

export default About;

