import React from 'react';
import {exchange} from '../../../assets/data/exchange';
import { Link } from 'react-router-dom';
import './Exchange.scss';
import { createUrlName } from '../../../assets/functions/functions';

const Exchange = () => {
  const {title, previewDescription, previewImageUrl} = exchange;
  return (
    <article className="exchange" id="exchanges">
      <h3 className="exchange__title">{title}</h3>
      <div className="exchange__wrapper">
       <div className="exchange__image-wrapper">
        <img 
          src={previewImageUrl} 
          alt="international exchanges" 
          className="exchange__image" 
        />
       </div>
        <div className="exchange__description-wrapper">
          <p className="exchange__description">
            {previewDescription}
          </p>
          <Link 
            to={`./${createUrlName(title)}`} 
            className="exchange__description-link"
          >
            wiecej
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Exchange;
