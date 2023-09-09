import React from 'react';
import './Footer.scss';
import upButton from '../../assets/images/Icons/switch__button-up.svg';

const Footer = () => {
  return (
    <footer className="footer">
     <div className="footer__wrapper">
        <p className="footer__element">Copyright © 2023 Festiwal Hokeja</p>
        <p className="footer__element">Polityka Prywatności</p>
     </div>
      <img 
        src={upButton}
        alt="up button" 
        className="footer__image"
        onClick={() => {
          window.scrollTo(0, 0)
        }}
      />
    </footer>
  )
}

export default Footer
