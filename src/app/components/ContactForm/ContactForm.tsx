'use client'
import React from 'react';
import {useForm, ValidationError} from "@formspree/react";
import styles from './contactForm.module.css'
import Done from "../Done/Done";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mnqelapa");
    if (state.succeeded) {
        return (
            <form className={styles.form}>
                <div className={styles.successBlock}>
                    <p>Спасибо за заявку!</p>
                    <Done width={"50px"} height={"50px"}/>
                </div>
            </form>
        );
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name" className={styles.label}>
                Ваше Имя
            </label>
            <input
                id="name"
                type="text"
                name="имя"
                className={styles.input}
            />
            <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
            />
            <label htmlFor="phone" className={styles.label}>
                Номер телефона
            </label>
            <input
                id="phone"
                type="tel"
                name="phone"
                className={styles.input}
            />
            <ValidationError
                prefix="phone"
                field="номер телефона"
                errors={state.errors}
            />
            <label htmlFor="service" className={styles.label}>
                Какую продукцию желаете заказать?
            </label>
            <input
                id="message"
                name="услуга"
                type={'text'}
                className={styles.input}
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className={styles.button}>
                Отправить
            </button>
        </form>
    );
};

export default ContactForm;