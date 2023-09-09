import React, { useRef } from 'react';
import './CoachCarousel.scss';
import CoachCard from './CoachCard/CoachCard';
import leftSwitchButton from '../../../assets/images/Icons/left-switch-button.svg';
import rightSwitchButton from '../../../assets/images/Icons/right-switch-button.svg';
import { coaches } from '../../../assets/data/coaches';
import { useCarouselCalculator } from '../../../assets/hooks/hooks';
import { useMouseEvents } from '../../../assets/hooks/hooks';


function CoachCarousel() {
  const coachImageRef = useRef(null);
  const coachesImages = coaches.map(coach => coach.imageUrl);
  const {handleLeftSwitch, handleRightSwitch, multiplier} = useCarouselCalculator({itemRef: coachImageRef, items: coachesImages});
  const {handleMouseDown, handleMouseMove, handleMouseUp} = useMouseEvents({onLeftSwitch: handleLeftSwitch, onRightSwitch: handleRightSwitch})
  return (
    <section className="carousel-section" id="our-crew">
      <div className="carousel-section__wrapper">
          <img 
            className="carousel__switch carousel__switch--left" 
            alt="carousel switch"
            src={leftSwitchButton}
            onClick={handleLeftSwitch}
          />
          <h2 className="carousel-section__title">Poznaj naszą ekipę!</h2>
          <img 
            className="carousel__switch carousel__switch--right"
            alt="carousel switch"
            src={rightSwitchButton}
            onClick={handleRightSwitch}
          />
      </div>
     
      <div className="carousel" >
        <div 
          className="coach-cards" 
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
            {
              coaches.map((coach, index)=> {
                return <CoachCard 
                  coach={coach} 
                  key={coach.id} 
                  imageRef={coachImageRef} 
                  translateX={`${multiplier* 100}%`}
                  onLeftSwitch={handleLeftSwitch}
                  onRightSwitch={handleRightSwitch}
                />
            })}
        </div>
      </div>
       
    </section>
    
  )
}

export default CoachCarousel
