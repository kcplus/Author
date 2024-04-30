import React from 'react';
import Header from "../../components/Header/Header";
import vector from '../../assets/Vector.svg'
import Image from "next/image";
import styles from './portfolio.module.css'
import image1 from '../../assets/Works/гофер 3.jpg'
import image2 from '../../assets/Works/24c85e8d-b73b-480f-aacf-a207bcb1afb7 (1) 1.jpg'
import image3 from '../../assets/Works/цыбулька режим работы 1.jpg'
import image4 from '../../assets/Works/ewwewe 1.jpg'
/////////////////////////////////////////////////////////////
import image5 from '../../assets/Works/9aea5b8b-e0c3-49e4-85b4-d65b5b0dcbd0 1.jpg'
import image6 from '../../assets/Works/led1-new 1.jpg'
import image7 from '../../assets/Works/IMG_20150123_145101 1.jpg'
import image8 from '../../assets/Works/IMG_20160416_235423 1.jpg'
/////////////////////////////////////////////////////////////
import image9 from '../../assets/Works/photo1712750514 1.jpg'
import image10 from '../../assets/Works/photo1712750514 (2) 1.jpg'
////////////////////////////////////////////////////////////
import image11 from '../../assets/Works/IMG_20131106_171110-new 1.jpg'
import image12 from '../../assets/Works/IMG_2915 (1) 1.jpg'
import image13 from '../../assets/Works/9df7ddf5-7114-430b-8dc3-24c597c877ff 1.jpg'
import image14 from '../../assets/Works/IMG_0293 (1) 1.jpg'
///////////////////////////////////////////////////////////
import image15 from '../../assets/Works/d3eb3dda-4f01-4e72-928d-228ee0e2184d 1.jpg'
import image16 from '../../assets/Works/IMG_20150122_192107 1.jpg'
import image17 from '../../assets/Works/IMG_20150514_094641 1.jpg'
import image18 from '../../assets/Works/cувенирная продукция 1.jpg'
import image19 from '../../assets/Works/реализация проекта 1.jpg'
import image20 from '../../assets/Works/571abf60-a38c-42af-bde0-b844e8aeb2fb 1.jpg'
//////////////////////////////////////////////////////////
import image21 from '../../assets/Works/IMG_0640 (1) 1.jpg'
import image22 from '../../assets/Works/IMG_20150706_181326 1.jpg'
import image23 from '../../assets/Works/IMG_20130606_215543 1.jpg'
import image24 from '../../assets/Works/IMG_0621 1.jpg'
//////////////////////////////////////////////////////////
import image25 from '../../assets/Works/IMG_20150110_144426 1.jpg'
import image26 from '../../assets/Works/orig 1.jpg'
/////////////////////////////////////////////////////////
import image27 from '../../assets/Works/IMG_20150729_212420 1.jpg'
import image28 from '../../assets/Works/0_02_05_0b2d8e653e0786b06c15a9e7c938790a964b5797285d44dd1b9b9f82395580d0 1.jpg'
import image29 from '../../assets/Works/0_02_05_7c460a98149dcd80acf94c3af7bdf66fdd1750f6ddb8ab5f9f829ff328618ae7 1.jpg'
////////////////////////////////////////////////////////
import image30 from '../../assets/Works/IMG_20140920_130227 1.jpg'
import image31 from '../../assets/Works/IMG_20151118_190356 1.jpg'
import image32 from '../../assets/Works/IMG_20160617_162319 1.jpg'
import image33 from '../../assets/Works/IMG_20150306_084818-new (1) 1.jpg'
///////////////////////////////////////////////////////
import image34 from '../../assets/Works/IMG_20160608_160759 1.jpg'
import image35 from '../../assets/Works/photo1704789601 (2) 1.jpg'
import image36 from '../../assets/Works/797ff788-ce3d-4d8f-90b7-a476ed130efa 1.jpg'
import image37 from '../../assets/Works/b7bfeedf-9b60-4daa-adfe-45877201dac0 1.jpg'
import Footer from "../../components/Footer/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Наши работы",
    description: "Наши работы",
    keywords: ['изготовление изделий из фанеры на заказ',
        'услуги лазерной резки фанеры цена',
        'логотип изготовление',
        'баннер растяжка цена',
        'растяжка для баннера',
        'баннер на растяжке',
        'рекламные наклейки на авто',
        'наклейки на стекло реклама',
        'реклама на машину наклейки изготовление',
        'наклейки с рекламой',
        'рекламные наклейки стекло',
        'заказать уголок потребителя',
        'уголок потребителя для общепита',
        'печать на холсте модульные картины',
        'картина на холсте заказать',
        'картина по фото на холсте',
        'изготовление картин на холсте',
        'производство картин на холсте',
        'картины на холсте цена',
        'напечатать картину на холсте недорого',
        'логотип на заказ цена',
        'заказать логотип компании',
        'широкоформатная печать на баннерной ткани',
        'карман оргстекло',
        'карманы для стендов',
        'цифровая печать на пленке',
        'широкоформатная печать на пленке',
        'типография печать на пленке',
        'цветная печать на пленке',
        'фотопечать на пленке',
        'цветная печать на самоклеющейся пленке',
        'срочная печать на самоклеющейся пленке',
        'срочная печать на самоклейке',
        'уф печать на прозрачной пленке',
        'уф печать на самоклеющейся пленке',
        'широкоформатная печать самоклеющаяся пленка',
        'широкоформатная печать на самоклеющейся',
        'фотопечать на прозрачной пленке',
        'уф печать пленка',
        'фрезеровка на заказ',
        'резка на фрезерном станке',
        'фрезерная резка пластика',
        'фрезерная резка цена',
        'срочная широкоформатная печать',
        'широкоформатная печать прайс',
        'широкоформатная печать для наружной рекламы',
        'круглосуточная широкоформатная печать',
        'широкоформатная печать цветная',
        'тейбл тент'
    ]
};
const Portfolio = () => {
    return (
        <>
            <div style={{width: '100%', height: '100%', position: 'relative', backgroundColor: 'black'}}>
                <Header clientPage={true}/>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1 className={styles.title}>Наши работы</h1>
                    <Image src={vector} alt={'VECTOR'} style={{position: 'absolute', right: '580px', top: '172px'}}/>
                </div>
                <div style={{display: 'flex', width: '100%', height: '100%', overflow: 'hidden'}}>
                    <div
                        style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', width: '100%', height: '100%'}}>
                        <Image src={image1} alt={''} style={{objectFit: 'cover'}}/>
                        <Image src={image2} alt={''} style={{objectFit: 'cover'}}/>
                        <Image src={image3} alt={''} style={{objectFit: 'cover'}}/>
                        <Image src={image4} alt={''} style={{objectFit: 'cover'}}/>
                        <Image src={image5} alt={''} style={{objectFit: 'cover'}}/>
                        <Image src={image6} alt={''} style={{objectFit: 'cover'}}/>
                        <Image src={image7} alt={''} style={{objectFit: 'cover'}}/>
                        <Image src={image8} alt={''} style={{objectFit: 'cover'}}/>

                    </div>
                </div>
                <div style={{display: 'flex'}}>
                    <Image src={image9} alt={''} style={{objectFit: 'cover'}} width={965} height={522}/>
                    <Image src={image10} alt={''} style={{objectFit: 'cover'}} width={935} height={522}/>
                </div>
                <div style={{display: 'flex'}}>
                    <Image src={image11} alt={''} style={{objectFit: 'cover'}}/>
                    <Image src={image12} alt={''} style={{objectFit: 'cover'}}/>
                    <Image src={image13} alt={''} style={{objectFit: 'cover'}}/>
                    <Image src={image14} alt={''} style={{objectFit: 'cover'}} height={568} width={450}/>
                </div>
                <div style={{display: 'flex'}}>
                    <Image src={image15} alt={''} style={{objectFit: 'cover'}}/>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <Image src={image16} alt={''} style={{objectFit: 'cover'}} width={377} height={365}/>
                        <Image src={image17} alt={''} style={{objectFit: 'cover'}} width={483} height={366}/>
                        <Image src={image18} alt={''} style={{objectFit: 'cover'}} width={454} height={366}/>
                        <Image src={image19} alt={''} style={{objectFit: 'cover'}} height={364}/>
                        <Image src={image20} alt={''} style={{objectFit: 'cover'}} width={588} height={364}/>
                    </div>
                </div>
                <div style={{display: 'flex', marginTop: '0'}}>
                    <Image src={image21} alt={''} style={{objectFit: 'cover'}}/>
                    <Image src={image22} alt={''} style={{objectFit: 'cover'}} width={460} height={529}/>
                    <Image src={image23} alt={''} style={{objectFit: 'cover'}}/>
                    <Image src={image24} alt={''} style={{objectFit: 'cover'}}/>
                </div>
                <div style={{display: 'flex'}}>
                    <Image src={image25} alt={''} style={{objectFit: 'cover'}} width={1025} height={466}/>
                    <Image src={image26} alt={''} style={{objectFit: 'cover'}} width={878}/>
                </div>
                <div style={{display: 'flex'}}>
                    <Image src={image27} alt={''} style={{objectFit: 'cover'}}/>
                    <Image src={image28} alt={''} style={{objectFit: 'cover'}}/>
                    <Image src={image29} alt={''} style={{objectFit: 'cover'}} width={740} height={437}/>
                </div>
                <div style={{display: 'flex'}}>
                    <Image src={image30} alt={''} style={{objectFit: 'cover'}}/>
                    <Image src={image31} alt={''} style={{objectFit: 'cover'}}/>
                    <Image src={image32} alt={''} style={{objectFit: 'cover'}}/>
                    <Image src={image33} alt={''} style={{objectFit: 'cover'}} width={554} height={530}/>
                </div>
                <div style={{display: 'flex'}}>
                    <Image src={image34} alt={''} style={{objectFit: 'cover'}}/>
                    <Image src={image35} alt={''} style={{objectFit: 'cover'}}/>
                    <Image src={image36} alt={''} style={{objectFit: 'cover'}}/>
                    <Image src={image37} alt={''} style={{objectFit: 'cover'}} width={299} height={461}/>
                </div>
                <div style={{marginTop: '250px'}}>
                    <Footer clientPage={true}/>
                </div>
            </div>

        </>
    );
};

export default Portfolio;
