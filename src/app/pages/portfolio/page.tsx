'use client'
import React from 'react';
import Header from "../../components/Header/Header";
import vector from '../../assets/Vector.svg'
import Image from "next/image";
import styles from './portfolio.module.css'
import { ReactPhotoCollage } from "react-photo-collage";
import image1 from '../../assets/коллаж из рекламы2.jpg'
import image2 from '../../assets/Pages/Signs/image 50.jpg'
import image3 from '../../assets/Pages/Signs/image 51.jpg'
import image$ from '../../assets/Pages/Signs/image 53.jpg'
import image5 from '../../assets/Pages/Signs/image 54.jpg'

const Portfolio = () => {
    /*const setting = {
        width: '100vw',
        height: ['250px', '160px'],
        layout: [2, 2],
        photos: [
            { source:'../../assets/коллаж из рекламы2.jpg' },
            { source: image2 },
            { source: image3 },
            { source: image$ },
            { source: image5 },
        ],
    };*/


    return (
        <div>
            <Header services={true}/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1 className={styles.title}>Наши работы</h1>
            <Image src={vector} alt={'VECTOR'} style={{position: 'absolute', right: '580px', top: '172px'}}/>
            </div>
            {/*<ReactPhotoCollage {...setting}/>*/}
        </div>
    );
};

export default Portfolio;