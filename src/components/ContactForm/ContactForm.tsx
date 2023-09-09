import React from 'react';
import './ContactForm.scss';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';

const ContactForm = () => {
  return (
  <form 
    action="" 
    className="contact-form"
  > 
    <div className="contact-form__input-wrapper">
      <label 
        htmlFor="message-content" 
        className="contact-form__label"
      >podaj tresc wiadomosci</label>
      <textarea 
        name="message" 
        id="message-content" 
        placeholder='Treść...'
        className="contact-form__input contact-form__input--textarea"
      
      >
      </textarea>
    </div>
    
    <div className="contact-form__input-wrapper">
      <label 
        htmlFor="name" 
        className="contact-form__label"
      >podaj imie i nazwisko</label>
      <input 
        type="text" 
        className="contact-form__input"
        id="name"
        name="name"
        placeholder="Imię i nazwisko"
      />
    </div>
    <div className="contact-form__input-wrapper">
      <label 
        htmlFor="email" 
        className="contact-form__label"
      >podaj email</label>
      <input 
        type="email" 
        className="contact-form__input"
        id="email"
        name="email"
        placeholder="E-mail"
      />
    </div>
    <label 
      className="contact-form__label contact-form__label--consent"
    >
      <input 
        type="checkbox" 
        className="contact-form__input contact-form__input--consent"
        name="email"
        placeholder="E-mail"
      />
      Wyrażam zgodę
    </label>
    <p className="contact-form__consent">
      Wyrażam zgodę na przetwarzanie moich danych osobowych przez Festiwal Hokeja, w celu udzielenia odpowiedzi, prowadzenia korespondencji oraz przesłania informacji handlowej. Przysługuje mi prawo dostępu do moich danych osobowych oraz ich edytowania.
      To pole jest wymagane.
    </p>
    <FormSubmitButton />
  </form>
  )
}

export default ContactForm
