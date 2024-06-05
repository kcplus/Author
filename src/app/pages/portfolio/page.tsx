'use client'
import React, {useState} from 'react';
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


const Portfolio = () => {
    const [modalImage, setModalImage] = useState(null);
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

    const openModal = (imageSrc: any) => {
        setModalImage(imageSrc);
    };

    const closeModal = () => {
        setModalImage(null);
    };
    return (
        <>
            <div style={{width: '100%', height: '100%', position: 'relative', backgroundColor: 'black'}}>
                <Header clientPage={true}/>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1 className={styles.title}>Наши работы</h1>
                    <Image src={vector} alt={'VECTOR'} className={styles.vectorStyles}/>
                </div>
                {width <= 500 ? (
                    <>
                        <div style={{display: 'flex'}}>
                            <Image src={image1} alt={''} style={{objectFit: 'cover'}} className={styles.img}
                                   onClick={() => openModal(image1)}/>
                            <Image src={image2} alt={''} style={{objectFit: 'cover'}} className={styles.img}
                                   onClick={() => openModal(image2)}/>
                            <Image src={image3} alt={''} style={{objectFit: 'cover'}} className={styles.img}
                                   onClick={() => openModal(image3)}/>
                            <Image src={image4} alt={''} style={{objectFit: 'cover'}} width={453} height={643}
                                   className={styles.img} onClick={() => openModal(image4)}/>

                            {modalImage && (
                                <div className={styles.modal} onClick={closeModal}>
                                    <Image src={modalImage} alt="Enlarged"/>
                                </div>
                            )}
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image5} alt={''} style={{objectFit: 'cover'}} className={styles.img}
                                   onClick={() => openModal(image5)}/>
                            <Image src={image6} alt={''} style={{objectFit: 'cover'}} className={styles.img}
                                   onClick={() => openModal(image6)}/>
                            <Image src={image7} alt={''} style={{objectFit: 'cover'}} className={styles.img}
                                   onClick={() => openModal(image7)}/>
                            <Image src={image8} alt={''} style={{objectFit: 'cover'}} width={453} height={362}
                                   className={styles.img}
                                   onClick={() => openModal(image8)}/>

                            {modalImage && (
                                <div className={styles.modal} onClick={closeModal}>
                                    <Image src={modalImage} alt="Enlarged"/>
                                </div>
                            )}
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image9} alt={''} style={{objectFit: 'cover'}} width={965} height={522}
                                   className={styles.imgBlock} onClick={() => openModal(image9)}/>
                            <Image src={image10} alt={''} style={{objectFit: 'cover'}} width={935} height={522}
                                   className={styles.imgBlock} onClick={() => openModal(image10)}/>

                            {modalImage && (
                                <div className={styles.modal} onClick={closeModal}>
                                    <Image src={modalImage} alt="Enlarged"/>
                                </div>
                            )}
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image11} alt={''} style={{objectFit: 'cover'}} className={styles.img11}
                                   onClick={() => openModal(image11)}/>
                            <Image src={image12} alt={''} style={{objectFit: 'cover'}} className={styles.img12}
                                   onClick={() => openModal(image12)}/>
                            <Image src={image13} alt={''} style={{objectFit: 'cover'}} className={styles.img13}
                                   onClick={() => openModal(image13)}/>
                            <Image src={image14} alt={''} style={{objectFit: 'cover'}} height={568} width={450}
                                   className={styles.img14} onClick={() => openModal(image14)}/>

                            {modalImage && (
                                <div className={styles.modal} onClick={closeModal}>
                                    <Image src={modalImage} alt="Enlarged"/>
                                </div>
                            )}
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image15} alt={''} style={{objectFit: 'cover'}} className={styles.img15}
                                   onClick={() => openModal(image15)}/>
                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                <Image src={image16} alt={''} style={{objectFit: 'cover'}} width={377} height={365}
                                       className={styles.img16} onClick={() => openModal(image16)}/>
                                <Image src={image17} alt={''} style={{objectFit: 'cover'}} width={483} height={366}
                                       className={styles.img17} onClick={() => openModal(image17)}/>
                                <Image src={image18} alt={''} style={{objectFit: 'cover'}} width={454} height={366}
                                       className={styles.img18} onClick={() => openModal(image18)}/>
                                <Image src={image19} alt={''} style={{objectFit: 'cover'}} height={364}
                                       className={styles.img19} onClick={() => openModal(image19)}/>
                                <Image src={image20} alt={''} style={{objectFit: 'cover'}} width={588} height={364}
                                       className={styles.img20} onClick={() => openModal(image20)}/>
                            </div>

                            {modalImage && (
                                <div className={styles.modal} onClick={closeModal}>
                                    <Image src={modalImage} alt="Enlarged"/>
                                </div>
                            )}
                        </div>
                        <div style={{display: 'flex', marginTop: '0'}}>
                            <Image src={image21} alt={''} style={{objectFit: 'cover'}} className={styles.img21}
                                   onClick={() => openModal(image21)}/>
                            <Image src={image22} alt={''} style={{objectFit: 'cover'}} width={460} height={529}
                                   className={styles.img22} onClick={() => openModal(image22)}/>
                            <Image src={image23} alt={''} style={{objectFit: 'cover'}} className={styles.img23}
                                   onClick={() => openModal(image23)}/>
                            <Image src={image24} alt={''} style={{objectFit: 'cover'}} className={styles.img24}
                                   onClick={() => openModal(image24)}/>

                            {modalImage && (
                                <div className={styles.modal} onClick={closeModal}>
                                    <Image src={modalImage} alt="Enlarged"/>
                                </div>
                            )}
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image25} alt={''} style={{objectFit: 'cover'}} width={1025} height={466}
                                   className={styles.img25} onClick={() => openModal(image25)}/>
                            <Image src={image26} alt={''} style={{objectFit: 'cover'}} width={878}
                                   className={styles.img26} onClick={() => openModal(image26)}/>

                            {modalImage && (
                                <div className={styles.modal} onClick={closeModal}>
                                    <Image src={modalImage} alt="Enlarged"/>
                                </div>
                            )}
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image27} alt={''} style={{objectFit: 'cover'}} className={styles.img27}
                                   onClick={() => openModal(image27)}/>
                            <Image src={image28} alt={''} style={{objectFit: 'cover'}} className={styles.img28}
                                   onClick={() => openModal(image28)}/>
                            <Image src={image29} alt={''} style={{objectFit: 'cover'}} width={740} height={437}
                                   className={styles.img29} onClick={() => openModal(image29)}/>

                            {modalImage && (
                                <div className={styles.modal} onClick={closeModal}>
                                    <Image src={modalImage} alt="Enlarged"/>
                                </div>
                            )}
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image30} alt={''} style={{objectFit: 'cover'}} className={styles.img30}
                                   onClick={() => openModal(image30)}/>
                            <Image src={image31} alt={''} style={{objectFit: 'cover'}} className={styles.img31}
                                   onClick={() => openModal(image31)}/>
                            <Image src={image32} alt={''} style={{objectFit: 'cover'}} className={styles.img32}
                                   onClick={() => openModal(image32)}/>
                            <Image src={image33} alt={''} style={{objectFit: 'cover'}} width={554} height={530}
                                   className={styles.img33} onClick={() => openModal(image33)}/>

                            {modalImage && (
                                <div className={styles.modal} onClick={closeModal}>
                                    <Image src={modalImage} alt="Enlarged"/>
                                </div>
                            )}
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image34} alt={''} style={{objectFit: 'cover'}} className={styles.img34}
                                   onClick={() => openModal(image34)}/>
                            <Image src={image35} alt={''} style={{objectFit: 'cover'}} className={styles.img35}
                                   onClick={() => openModal(image35)}/>
                            <Image src={image36} alt={''} style={{objectFit: 'cover'}} className={styles.img36}
                                   onClick={() => openModal(image36)}/>
                            <Image src={image37} alt={''} style={{objectFit: 'cover'}} width={299} height={461}
                                   className={styles.img37} onClick={() => openModal(image37)}/>

                            {modalImage && (
                                <div className={styles.modal} onClick={closeModal}>
                                    <Image src={modalImage} alt="Enlarged" style={{objectFit: 'cover'}}/>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{display: 'flex'}}>
                            <Image src={image1} alt={''} style={{objectFit: 'cover'}} className={styles.img}/>
                            <Image src={image2} alt={''} style={{objectFit: 'cover'}} className={styles.img}/>
                            <Image src={image3} alt={''} style={{objectFit: 'cover'}} className={styles.img}/>
                            <Image src={image4} alt={''} style={{objectFit: 'cover'}} width={453} height={643}/>
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image5} alt={''} style={{objectFit: 'cover'}} className={styles.img}/>
                            <Image src={image6} alt={''} style={{objectFit: 'cover'}} className={styles.img}/>
                            <Image src={image7} alt={''} style={{objectFit: 'cover'}} className={styles.img}/>
                            <Image src={image8} alt={''} style={{objectFit: 'cover'}} width={453} height={362}
                                   className={styles.img}/>
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image9} alt={''} style={{objectFit: 'cover'}} width={965} height={522}
                                   className={styles.imgBlock}/>
                            <Image src={image10} alt={''} style={{objectFit: 'cover'}} width={935} height={522}
                                   className={styles.imgBlock}/>
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image11} alt={''} style={{objectFit: 'cover'}} className={styles.img11}/>
                            <Image src={image12} alt={''} style={{objectFit: 'cover'}} className={styles.img12}/>
                            <Image src={image13} alt={''} style={{objectFit: 'cover'}} className={styles.img13}/>
                            <Image src={image14} alt={''} style={{objectFit: 'cover'}} height={568} width={450}
                                   className={styles.img14}/>
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image15} alt={''} style={{objectFit: 'cover'}} className={styles.img15}/>
                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                <Image src={image16} alt={''} style={{objectFit: 'cover'}} width={377} height={365}
                                       className={styles.img16}/>
                                <Image src={image17} alt={''} style={{objectFit: 'cover'}} width={483} height={366}
                                       className={styles.img17}/>
                                <Image src={image18} alt={''} style={{objectFit: 'cover'}} width={454} height={366}
                                       className={styles.img18}/>
                                <Image src={image19} alt={''} style={{objectFit: 'cover'}} height={364}
                                       className={styles.img19}/>
                                <Image src={image20} alt={''} style={{objectFit: 'cover'}} width={588} height={364}
                                       className={styles.img20}/>
                            </div>
                        </div>
                        <div style={{display: 'flex', marginTop: '0'}}>
                            <Image src={image21} alt={''} style={{objectFit: 'cover'}} className={styles.img21}/>
                            <Image src={image22} alt={''} style={{objectFit: 'cover'}} width={460} height={529}
                                   className={styles.img22}/>
                            <Image src={image23} alt={''} style={{objectFit: 'cover'}} className={styles.img23}/>
                            <Image src={image24} alt={''} style={{objectFit: 'cover'}} className={styles.img24}/>
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image25} alt={''} style={{objectFit: 'cover'}} width={1025} height={466}
                                   className={styles.img25}/>
                            <Image src={image26} alt={''} style={{objectFit: 'cover'}} width={878}
                                   className={styles.img26}/>
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image27} alt={''} style={{objectFit: 'cover'}} className={styles.img27}/>
                            <Image src={image28} alt={''} style={{objectFit: 'cover'}} className={styles.img28}/>
                            <Image src={image29} alt={''} style={{objectFit: 'cover'}} width={740} height={437}
                                   className={styles.img29}/>
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image30} alt={''} style={{objectFit: 'cover'}} className={styles.img30}/>
                            <Image src={image31} alt={''} style={{objectFit: 'cover'}} className={styles.img31}/>
                            <Image src={image32} alt={''} style={{objectFit: 'cover'}} className={styles.img32}/>
                            <Image src={image33} alt={''} style={{objectFit: 'cover'}} width={554} height={530}
                                   className={styles.img33}/>
                        </div>
                        <div style={{display: 'flex'}}>
                            <Image src={image34} alt={''} style={{objectFit: 'cover'}} className={styles.img34}/>
                            <Image src={image35} alt={''} style={{objectFit: 'cover'}} className={styles.img35}/>
                            <Image src={image36} alt={''} style={{objectFit: 'cover'}} className={styles.img36}/>
                            <Image src={image37} alt={''} style={{objectFit: 'cover'}} width={299} height={461}
                                   className={styles.img37}/>
                        </div>
                    </>
                )}
                <div style={{marginTop: '250px'}}>
                    <Footer clientPage={true}/>
                </div>
            </div>

        </>
    );
};

export default Portfolio;
