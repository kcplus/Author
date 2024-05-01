import React from 'react';
import Header from "../../../components/Header/Header";
import styles from './roof.module.css'
import cat from "../../../assets/Pages/Roof-installations/специалист4 1.svg";
import {roof_installations_arr} from "../../../constants/PagesConstants/Roof-installations/constants";
import ServiceImages from "../../../components/ServiceImages/ServiceImages";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Крышные установки",
    description: "Крышные установки",
};

const RoofInstallations = () => {
    const marginTop = 50
    const marginLeft = 380

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1 className={styles.title}>Крышные установки</h1>
                <ServiceImages imagesArray={roof_installations_arr} cat={cat} marginTop={marginTop} marginLeft={marginLeft}/>
            </div>
        </div>
    );
};

export default RoofInstallations;