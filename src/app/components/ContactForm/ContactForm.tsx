'use client'
import React from 'react';
import {useForm, ValidationError} from "@formspree/react";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mnqelapa");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Ваше Имя
            </label>
            <input
                id="name"
                type="text"
                name="имя"
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
                type="number"
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
            <textarea
                id="message"
                name="услуга"
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