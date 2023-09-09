import React, { useEffect, useState } from 'react';
import headerImage from '../../../assets/images/header/header__image.png';
import './Header.scss';
import { Link } from 'react-router-dom';
import SocialIcon from '../../SocialIcon/SocialIcon';
import facebookIcon from '../../../assets/images/Icons/facebook__icon.svg'
import facebookIconOnHover from '../../../assets/images/Icons/facebook__icon--on-hover.svg';
import instagramIcon from '../../../assets/images/Icons/instagram__icon.svg';
import instagramIconOnHover from '../../../assets/images/Icons/instagram__icon--on-hover.svg';
import youtubeIcon from '../../../assets/images/Icons/youtube__icon.svg'
import youtubeIconOnHover from '../../../assets/images/Icons/youtube__icon--on-hover.svg'
import { useResolutionContext } from '../../../assets/context/ResolutionContext';
import { Device } from '../../../types/device';
import { upcomingEvents } from '../../../assets/data/upcomingEvents';
import { getRemainingTime } from '../../../assets/functions/functions';

console.log(getRemainingTime(upcomingEvents[0].date));
console.log(upcomingEvents[0].date.getTime())

function Header() {
  const {device} = useResolutionContext();
  const [remainingTime, setRemainingTime] = useState(getRemainingTime(upcomingEvents[0].date));

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime(upcomingEvents[0].date))
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  }, []);

  const handleOneDigitDisplay = (time: number):string => {
    return (time < 10 ? '0' : '') + time;
  }

  const {days, hours, minutes, seconds} = remainingTime;
  return (
    <div className="header">
    <div className="header__main-content">
      <img 
        src={headerImage} 
        alt="festiwal hokeja" 
        className="header__main-content-image" 
      />
      <div className="header__main-content-titles">
      <h1 className="header__main-content-title">dołącz do elity</h1>
      <p className="header__main-content-subtitle">
        start za &nbsp;
        {days && <><span className="header__main-content-subtitle-value">{days}</span> dni </>}
        {(days || hours) && <><span className="header__main-content-subtitle-value header__main-content-subtitle-value--two-digits">{handleOneDigitDisplay(+hours)}</span> godzin</>}
        {(days || hours || minutes) && <><span className="header__main-content-subtitle-value header__main-content-subtitle-value--two-digits">{handleOneDigitDisplay(+minutes)}</span> minut</>}
        {(days || hours || minutes || seconds) && <><span className="header__main-content-subtitle-value header__main-content-subtitle-value--two-digits">{handleOneDigitDisplay(+seconds)}</span> sekund </>}
      </p>
      </div>
      {Device.DESKTOP === device && <div className="header__main-content-social-links">
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
      }
      <button className="header__button">
        <Link to="./sign-up">Zapisz się</Link>
      </button>
    </div>
    </div>
  )
}

export default Header
