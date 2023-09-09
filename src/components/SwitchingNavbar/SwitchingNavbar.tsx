import React, { useCallback, useState } from 'react';
import { NavbarChoice } from '../../types/navbarChoice';
import { sections } from '../../assets/data/navbarItems';
import { pages } from '../../assets/data/navbarItems';
import { languages } from '../../assets/data/navbarItems';
import { createUrlName } from '../../assets/functions/functions';
import { Link } from 'react-router-dom';

interface SwitchingNavbarProps {
  className: string,
  onMenuClose: () => void,
}

export const SwitchingNavbar:React.FC<SwitchingNavbarProps> =  ({className, onMenuClose}) =>  {
  const [currentNavbar, setCurrentNavbar] = useState<NavbarChoice>(NavbarChoice.PAGES)

  const notLinks = ["Sections", "Pages", "Languages"];

  const chooseNavbar = useCallback((currentNavbar: NavbarChoice) => {
    switch(currentNavbar) {
      case NavbarChoice.LANGUAGES:
        return languages;
      case NavbarChoice.PAGES:
        return pages;
      case NavbarChoice.SECTIONS:
        return sections;
    }
  }, []);

  const navbarElements = chooseNavbar(currentNavbar);

  return (
    <ul className={`${className}__list`}>
          {navbarElements.map(element => {
            let link = null;
            if (NavbarChoice.SECTIONS === currentNavbar) {
              link = <Link to={`/#${createUrlName(element)}`} replace onClick={onMenuClose}>{element}</Link>
            } 

            if (NavbarChoice.PAGES === currentNavbar) {
              link = <Link to={`${createUrlName(element)}`} onClick={onMenuClose}>{element}</Link>
            }

            return !notLinks.includes(element) 
            && link
            ?  <li className={`${className}__element`}>
                {link}
                </li>
            :  <li 
                className={`${className}__element`} 
                onClick={() => {
                  if (notLinks.includes(element)) {
                    setCurrentNavbar(element as NavbarChoice);
                  }
                }}
                >
                {element}
              </li>
          })
        }
    </ul>
  )
}