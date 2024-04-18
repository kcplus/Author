'use client'
import React from 'react';
import {useForm, ValidationError} from "@formspree/react";
import styles from './contactForm.module.css'

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mnqelapa");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name">
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
            <label htmlFor="phone">
                Номер телефона
            </label>
            <input
                id="phone"
                type="tel"
                name="phone"
            />
            <ValidationError
                prefix="phone"
                field="номер телефона"
                errors={state.errors}
            />
            <label htmlFor="service">
                Какую продукцию желаете заказать?
            </label>
            <input
                id="message"
                name="услуга"
                type={'text'}
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
};

export default ContactForm;