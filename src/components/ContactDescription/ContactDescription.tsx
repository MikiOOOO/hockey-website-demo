import React from 'react';
import facebookIcon from '../../assets/images/Icons/facebook__icon.svg';
import facebookIconOnHover from '../../assets/images/Icons/facebook__icon--on-hover.svg';
import instagramIcon from '../../assets/images/Icons/instagram__icon.svg';
import instagramIconOnHover from '../../assets/images/Icons/instagram__icon--on-hover.svg'
import youtubeIcon from '../../assets/images/Icons/youtube__icon.svg';
import youtubeIconOnHover from '../../assets/images/Icons/youtube__icon--on-hover.svg';
import ContactIcons from '../ContactIcons/ContactIcons';
import ContactOwnerData from '../ContactOwnerData/ContactOwnerData';
import logo from '../../assets/images/logo/logo.svg';
import foundationLogo from '../../assets/images/logo/fundacja.svg';
import ContactForm from '../ContactForm/ContactForm';
import './ContactDescription.scss';
import Footer from '../Footer/Footer';
import SocialIcon from '../SocialIcon/SocialIcon';

const ContactDescription = () => {
  return (
    <>
       <section className="contact-description">
       <h2 className="contact-description__title">KONTAKT</h2>
       <div className="contact-description__field-wrapper">
        <article className="contact-description__field">
          <h3 className="contact-description__field-title">Wyślij wiadomość</h3>
          <div className="contact-description__field-form">
            <ContactForm />
          </div>
        </article>
        <article className="contact-description__field">
          <h2 className="contact-description__field-title contact-description__field-title--contact-data">Dane kontaktowe</h2>
          <ContactIcons  
            phoneNumber='789-362-337' 
            address='ul. Stawowa 28, 45-763 Opole' 
            email='kontakt@festiwalhokeja.com'
          />
          <p className="contact-description__field-info">
            Zapraszamy do odwiedzenia naszych sociali
          </p>
          {/* future component */}
          <div className="contact-description__social-links">
            <SocialIcon 
              icon={facebookIcon} 
              iconOnHover={facebookIconOnHover} 
              altAttr='facebook' 
              socialLink='https://www.facebook.com/festiwalhokeja/?locale=pl_PL'
            />
            <SocialIcon 
              icon={instagramIcon} 
              iconOnHover={instagramIconOnHover} 
              altAttr='instagram' 
              socialLink='https://www.instagram.com/festiwal_hokeja/'
            />
            <SocialIcon 
              icon={youtubeIcon} 
              iconOnHover={youtubeIconOnHover} 
              altAttr='youtube' 
              socialLink='https://www.youtube.com/watch?v=7Ecuw695yyY'
            />
          </div>
        </article>
        <article className="contact-description__field">
          <ContactOwnerData
            title='Fundacja "Do Przerwy 0:1"'
            phoneNumber="789-362-337" 
            address="ul. Stawowa 28, 45-763 Opole"
            email="kontakt@festiwalhokeja.com"
            personName='Maciej Fabiańczyk'
            additionalInfo='KRS: 0000856051'
            logo={foundationLogo}
          />
        </article>
        <article className="contact-description__field">
          <ContactOwnerData
            title="Sport and Entertainment Factory"
            phoneNumber="502-295-689" 
            address="ul. Stawowa 28, 45-763 Opole"
            email="a.fabiańczyk@wp.pl"
            personName='Aleksandra Fabiańczyk'
            additionalInfo='NIP: 7541886467'
            logo={logo }
          />
        </article>
      </div>
    </section>
    <Footer />
    </>
   
  )
}

export default ContactDescription
