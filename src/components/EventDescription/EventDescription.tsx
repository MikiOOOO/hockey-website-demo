import React, { useRef } from 'react';
import { TournamentStructure, ExchangeStructure, CampStructure } from '../../types/event';
import switchBtn from '../../assets/images/Icons/switch__button.svg';
import './EventDescription.scss';
import facebookIcon from '../../assets/images/Icons/facebook__icon.svg';
import facebookIconOnHover from '../../assets/images/Icons/facebook__icon--on-hover.svg';
import instagramIcon from '../../assets/images/Icons/instagram__icon.svg';
import instagramIconOnHover from '../../assets/images/Icons/instagram__icon--on-hover.svg';
import youtubeIcon from '../../assets/images/Icons/youtube__icon.svg';
import youtubeIconOnHover from '../../assets/images/Icons/youtube__icon--on-hover.svg';
import { Link } from 'react-router-dom';
import { useCarouselCalculator } from '../../assets/hooks/hooks';
import { useTouchEvents } from '../../assets/hooks/hooks';
import SocialIcon from '../SocialIcon/SocialIcon';

// fetch image widths and compare with screen width too calculate how may swipes may be done 

interface EventDescriptionProps {
  event: TournamentStructure | ExchangeStructure | CampStructure;
}



const EventDescription:React.FC<EventDescriptionProps> = ({event}) => {
  const {title, fullDescription, imageUrls} = event;
  const photoRef = useRef(null);
  
  const {handleLeftSwitch, handleRightSwitch, multiplier} = useCarouselCalculator({ itemRef: photoRef, items: imageUrls });
  const {handleTouchEnd, handleTouchMove, handleTouchStart} = useTouchEvents({onLeftSwitch: handleLeftSwitch, onRightSwitch: handleRightSwitch})
  return (
    <section className="event-description">
      <h2 className="event-description__title">{title}</h2>
      <div className="event-description__content-wrapper">
        <p className="event-description__content">{fullDescription}</p>
      </div>
      <div className="event-description__social-links">
        <h3 className="event-description__social-links-title">Po wiecej zdjec wpadaj na nasze sociale!</h3>
        <div className="event-description__social-links-icons">
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
      </div>
      <div className="event-description__carousel">
        <div className="event-description__carousel-switch-buttons">
          <img 
            src={switchBtn} 
            alt="switch  button left" 
            className="event-description__carousel-switch-button event-description__carousel-switch-button--left"
            onClick={handleLeftSwitch}
          />
          <h4 className="event-description__carousel-title">Gallery</h4>
          <img 
            src={switchBtn} 
            alt="switch  button right" 
            className="event-description__carousel-switch-button"
            onClick={handleRightSwitch}
          />
        </div>
        <div className="event-description__carousel-images" >
          {imageUrls?.map((imageUrl, index) => (
            <img 
              src={imageUrl} 
              alt={`${title} event`}
              className="event-description__carousel-image"
              key={index}
              style={{transform: `translateX(${multiplier * 100 }%)`}}
              ref={photoRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
          ))}
        </div>
        <button className="sign-up__button">
          <Link to="/sign-up">
            zapisz sie
          </Link>
        </button>
      </div>
    </section>
  )
}

export default EventDescription;