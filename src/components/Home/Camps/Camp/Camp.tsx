import React, { useState } from 'react';
import { CampStructure } from '../../../../types/event';
import { Link } from 'react-router-dom';
import './Camp.scss';
import { useResolutionContext } from '../../../../assets/context/ResolutionContext';
import { Device } from '../../../../types/device';
import { createUrlName } from '../../../../assets/functions/functions';


interface CampProps {
  camp: CampStructure,
  index: number,
}

const Camp:React.FC<CampProps> = ({camp, index}) => {
  const {
    title, 
    previewDescription,
    decorationImageUrl,
  } = camp;
  const {device} = useResolutionContext();
  const [hovered, setHovered] = useState(false);

  const isOdd = () => {
    return index % 2
  }

  return (
    <article className="camp-card">
      <div className="camp-card__content-wrapper" style={{order: `${ device === Device.DESKTOP && isOdd() ? '2' : '1'}`}}>
        
        <div className="camp-card__content" style={{transform: `${hovered && device === Device.DESKTOP ? isOdd() ? 'translateX(-100%)' : 'translateX(100%)' : 'translateX(0)'}`}}>
          
          <div className="camp-card__content-image-wrapper">
            <p className="camp-card__content-description">
              {previewDescription}
            </p>
          </div>
         
        </div>
        <h3 className="camp-card__content-title">{title}</h3>
      </div>
      
      <div className="camp-card__decoration-image-wrapper" style={{order: `${ device === Device.DESKTOP && isOdd() ? '1' : '2'} `}}>
        <img 
          className="camp-card__decoration-image"
          alt="decoration"
          src={decorationImageUrl}
          style={{transform: `${device === Device.DESKTOP && hovered  ? isOdd() ? 'translateX(120%)' : 'translateX(-120%)' : 'translateX(0)'}`}}
        />
         <Link 
            className="camp-card__content-more"
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
            to={`${createUrlName(title)}`}
          >
            wiecej
          </Link>
      </div>
    </article>
  )
}

export default Camp;