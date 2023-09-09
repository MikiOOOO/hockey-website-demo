import React, { useState } from 'react';
import './SocialIcon.scss';

interface SocialIconProps {
  icon: string,
  iconOnHover: string,
  altAttr: string,
  socialLink: string,
}

const SocialIcon:React.FC<SocialIconProps> = ({icon, iconOnHover, altAttr, socialLink}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
  <a 
    href={socialLink} 
    className="social-link"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    target='_blank'
    rel="noopener noreferrer"
  >
    <img 
      src={isHovered ? iconOnHover : icon} 
      alt={altAttr} 
      className="social-link__icon" 
    />
  </a>
  )
}

export default SocialIcon
