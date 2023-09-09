import React from 'react'
import ContactIcons from '../ContactIcons/ContactIcons';
import linkedinIcon from '../../assets/images/Icons/Linkedin__icon.svg';
import './ContactOwnerData.scss';

interface ContactOwnerDataProps {
  title: string;
  phoneNumber: string;
  address: string;
  email: string;
  personName: string;
  additionalInfo: string;
  logo: string;
}

const ContactOwnerData:React.FC<ContactOwnerDataProps> = ({
  title, phoneNumber, address, email, personName ,  additionalInfo, logo}) => {
  return (
    <div className="contact-owner-data">
      <h2 className="contact-owner-data__title">{title}</h2>
      <ContactIcons  
        phoneNumber={phoneNumber}
        address={address}
        email={email}
      />
      <div className="contact-owner-data__person-details-wrapper">
        <a 
          href="https://www.linkedin.com" 
          className="contact-owner-data__person-details-social-link"
        >
          <img 
            src={linkedinIcon} 
            alt="linkedin" 
            className="contact-owner-data__person-details-social-image" 
          />
        </a>
        <div className="contact-owner-data__person-details-name-wrapper">
          <p className="contact-owner-data__person-details-name">
            {personName}
          </p>
          <p className="contact-owner-data__person-details-name-additional-info">
            {additionalInfo}
          </p>
        </div>
      </div>
      <img 
        src={logo} 
        alt="logo" 
        className="contact-owner-data__logo" 
      />
    </div>
  )
}

export default ContactOwnerData
