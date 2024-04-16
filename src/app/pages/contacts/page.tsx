
import React from 'react';
import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contacts = () => {
    return (
        <div>
            <Header services={true}/>
            <h1>Contacts</h1>
            <ContactForm />
        </div>
    );
};

export default Contacts;