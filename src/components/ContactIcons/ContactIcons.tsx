import React from 'react';
import phoneIcon from '../../assets/images/Icons/contact/phone.svg';
import navigationIcon from '../../assets/images/Icons/contact/navigation.svg';
import emailIcon from '../../assets/images/Icons/contact/address.svg';
import './ContactIcons.scss';

interface ContactIconsProps {
  phoneNumber: string,
  address: string,
  email: string,
}

const ContactIcons:React.FC<ContactIconsProps> = ({phoneNumber, address, email}) => {
  return (
    <div className="contact-icons__data-wrapper">
      <div className="contact-icons__data-value">
        <div className="contact-icons__data-value-icon-wrapper">
            <img 
              src={phoneIcon} 
              alt="phone" 
              className="contact-icons__data-value-icon" 
            />
        </div>
        <p className="contact-icons__data-value-content">{phoneNumber}</p>
      </div>
      <div className="contact-icons__data-value">
        <div className="contact-icons__data-value-icon-wrapper">
          <img 
            src={navigationIcon} 
            alt="naviagtion" 
            className="contact-icons__data-value-icon" 
          />
        </div>
        <p className="contact-icons__data-value-content">{address}</p>
      </div>
      <div className="contact-icons__data-value">
        <div className="contact-icons__data-value-icon-wrapper">
          <img 
            src={emailIcon} 
            alt="email" 
            className="contact-icons__data-value-icon" 
          />
        </div>
        <p className="contact-icons__data-value-content">{email}</p>
      </div>
    </div>
  )
}

export default ContactIcons
