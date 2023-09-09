import React from 'react';
import './NavbarDesktop.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.svg';
import { SwitchingNavbar } from '../SwitchingNavbar/SwitchingNavbar';

interface NavbarDesktopProps {
  style: {borderColor: string}
}

const NavbarDesktop:React.FC<NavbarDesktopProps> = ({style}) => {
  return (
    <nav className="navbar-desktop" style={style}>
      <Link to="/" className="navbar-desktop__logo-link">
        <img 
          src={logo}
          alt="logo" 
          className="navbar-desktop__logo" 
        />
      </Link>
      <SwitchingNavbar className='navbar-desktop' onMenuClose={() => {}}/>
    </nav>
  )
}

export default NavbarDesktop;
