import React from 'react';
import './Contact.scss';
import logo from '../../../assets/images/logo/logo.svg';
import { Link } from 'react-router-dom';
import ContactIcons from '../../../components/ContactIcons/ContactIcons';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Kontakt</h2>
      <div className="contact__data">
        <ContactIcons 
          phoneNumber='789-362-337' 
          address='ul. Stawowa 28, 45-763 Opole' 
          email='kontakt@festiwalhokeja.com'
        />
        <img 
          src={logo} 
          alt="logo" 
          className="contact__logo" 
        />
      </div>
      <Link to="./contact">
        <button className="contact__button">wiecej</button>
      </Link>
    </section>
  )
}

export default Contact;
