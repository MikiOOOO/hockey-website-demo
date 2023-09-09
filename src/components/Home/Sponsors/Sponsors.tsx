import React, { useEffect, useState } from 'react';
import { sponsors } from '../../../assets/data/sponsors';
import "./Sponsors.scss";
import { Link } from 'react-router-dom';
import { useResolutionContext } from '../../../assets/context/ResolutionContext';
import { Device } from '../../../types/device';


const MAX__SLIDES = sponsors.length;
const ANIMATION__TIME = 2000;

const Sponsors = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slidingBackwards, setSlidingBackwards] = useState(false);
  const {device} = useResolutionContext();
  let perPage = 0;

  if (device === Device.TABLET) {
    perPage = 3;
  }

  if (device === Device.MOBILE) {
    perPage = 1;
  }

  useEffect(() => {
   setCurrentSlide(1);
  }, [device])

  useEffect(() => {
    const interval = setInterval(() => {
      
      console.log(device, currentSlide)
     

      if (currentSlide === MAX__SLIDES - perPage - 1) {
        setSlidingBackwards(true);
      } 

      if (currentSlide === 1) {
        setSlidingBackwards(false);
      }
      
 
      setCurrentSlide( prev => {
        return slidingBackwards ? prev - 1 : prev + 1;
      });
    
    }, ANIMATION__TIME);

    return () => {
      clearInterval(interval);
    }
  });

  return (
    <article className="sponsors" id="sponsors">
        <p className="sponsors__title">Sponsorzy i partnerzy</p>
        <div className="sponsors__carousel">
          {sponsors.map(sponsor =>  {
            const {title, imageUrl} = sponsor;
            return (
              <img 
                className="sponsors__image" 
                src={imageUrl}
                alt={title}
                style={{transform: `translateX(${device !== Device.DESKTOP ? currentSlide *-100 : 0}%)`}}
              />
            )  
          })}
        </div>
        <p className="sponsors__more">
          <Link to="./sponsors">zostan sponsorem!</Link>
        </p>
    </article>
  )
}

export default Sponsors;
