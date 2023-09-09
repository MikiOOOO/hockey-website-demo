import React from 'react';
import logo from '../../assets/images/logo/logo.svg';
import hamburgerIcon from '../../assets/images/Icons/hamburger__menu.svg';
import xIcon from '../../assets/images/Icons/X.svg';
import facebookIcon from '../../assets/images/Icons/facebook__icon.svg';
import facebookIconOnHover from '../../assets/images/Icons/facebook__icon--on-hover.svg';
import youtubeIcon from '../../assets/images/Icons/youtube__icon.svg';
import youtubeIconOnHover from '../../assets/images/Icons/youtube__icon--on-hover.svg';
import instagramIcon from '../../assets/images/Icons/instagram__icon.svg';
import instagramIconOnHover from '../../assets/images/Icons/instagram__icon--on-hover.svg';
import { SwitchingNavbar } from '../SwitchingNavbar/SwitchingNavbar';

import './NavbarMobile.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import SocialIcon from '../SocialIcon/SocialIcon';


function NavbarMobile() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuShown, setMenuShown] = useState(false);
 
  const showMenuStyles = {
    transform: 'translateY(0)',
  };
  
  const hideMenuStyles = {
    transform: 'translateY(-100%)',
  };


  const handleMenuClose = () => {
    setMenuShown(false);
    setTimeout(() => {
      setShowMenu(false);
    }, 300);
  };

  const handleMenuOpen = () => {
    setShowMenu(true);
    setTimeout(() => {
      setMenuShown(true);
    }, 100);
  }

  return (
    <> 
      <nav className="navbar" >
        <Link to="/">
          <img 
            src={logo} 
            alt="festiwal hokeja logo" 
            className="navbar__logo" 
          />
        </Link>
        <img 
          src={hamburgerIcon} 
          alt="hamburger icon" 
          className="navbar__hamburger-icon"
          onClick={handleMenuOpen}
        />
      </nav>
      <nav 
        className={classNames({"navbar--open" : showMenu, "navbar--closed": !showMenu})}
        style={menuShown ? showMenuStyles : hideMenuStyles}
      >
      <div className="navbar-wrapper">
       <Link to="/">
          <img 
            src={logo} 
            alt="festiwal hokeja logo" 
            className="navbar__logo" 
            onClick={handleMenuClose}
          />
       </Link>
        <img 
          src={xIcon} 
          alt="exit icon" 
          className="navbar__hamburger-icon"
          onClick={handleMenuClose}
        />
        </div>
        
        <SwitchingNavbar className="navbar" onMenuClose={handleMenuClose}/>
        
        <div className="navbar__social-icons">
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
      </nav>
    </>
  )
}

export default NavbarMobile
