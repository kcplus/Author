'use client'
import React from 'react';
import styles from "../../pages/about/about.module.css";

const HighlightKeywords = ({textArray}: any) => {
    const highlightedWords = ['Крюков', 'Максим', 'Сергеевич', '«Комбинатор»', 'АВТОР', 'СТУДИЯ', 'Гомеле', 'самые', 'смелые', 'идеи', 'гарантию', 'на', 'нашу', 'продукцию', 'от', '12', 'месяцев', 'Звоните', 'мы', '-', 'сделаем', 'все', 'на', 'высшем', 'уровне!'];
    return (
        <>
            {textArray.map((item: any) => (
                <span className={styles.styleText} key={item.id}>
                {item.value.split(' ').map((word: any, index: number) => {
                    if (highlightedWords.includes(word.replace(/[.,]/g, ''))) {
                        if (word.replace(/[.,]/g, '') === 'АВТОР' || word.replace(/[.,]/g, '') === 'СТУДИЯ') {
                            return <span key={index} style={{color: '#8416FB'}}>{word} </span>;
                        } else {
                            return <span key={index} style={{color: 'rgba(69, 248, 250, 1)'}}>{word} </span>;
                        }
                    } else {
                        return <span key={index}>{word} </span>;
                    }
                })}
            </span>
            ))}
        </>
    )
};

export default HighlightKeywords;