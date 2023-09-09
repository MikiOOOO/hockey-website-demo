import React, { useState, RefObject } from 'react';
import { Coach } from '../../../../types/coach';
import './CoachCard.scss';
import { useTouchEvents } from '../../../../assets/hooks/hooks';


interface CoachCardProps {
  coach: Coach,
  translateX: string,
  imageRef: RefObject<HTMLDivElement>,
  onLeftSwitch: () => void,
  onRightSwitch: () => void
};

const CoachCard: React.FC<CoachCardProps> = ({ coach,  translateX, imageRef, onLeftSwitch, onRightSwitch }) => {
  const { name, description, imageUrl } = coach;
  const [showDescription, setShowDescription] = useState(false);

  const descriptionPropertiesShown = {
    transform: 'translateY(0)',
    borderColor: 'transparent',
  }

  const descriptionPropertiesHidden = {
    transform: 'translateY(-100%)',
    borderColor: 'lightgray',
  }

  const {handleTouchStart, handleTouchMove ,handleTouchEnd} = useTouchEvents({onLeftSwitch, onRightSwitch});
 
  return (
    <div 
      className="coach-card__wrapper"
      style={{transform: `translateX(${translateX})`}}
      ref={imageRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <article 
        className="coach-card" 
      >
      <h3 className="coach-card__name">{name}</h3>
      <img alt={name} className="coach-card__photo" src={imageUrl}/>
      <button 
        className="coach-card__button" 
        onClick={() => {
          setShowDescription(true);
        }}
        style={{opacity: `${showDescription ? '0' : '1'}`}}
      >
        wiecej
      </button>
      <aside className="coach-card__description" style={showDescription ? descriptionPropertiesShown : descriptionPropertiesHidden}>
        <div className=""></div>
        <p className="coach-card__description-value">{description}</p>
        <button 
          className="coach-card__button"
          onClick={() => {
            setShowDescription(false);
          }}
        >
          powrót
        </button>
      </aside>
    </article>
    </div>
  
  );
}

export default CoachCard;
// display: `${showDescription ? 'flex' : 'flex'}`,