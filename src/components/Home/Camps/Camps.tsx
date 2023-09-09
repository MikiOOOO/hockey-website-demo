import React from 'react';
import { camps } from '../../../assets/data/camps';
import Camp from './Camp/Camp';
import './Camps.scss';


const Camps = () => {
  return (
    <section className="camp-cards" id="camps">
        <h2 className="camp-cards__title">Campy</h2>
        {camps.map((camp, index) => {
          return <Camp camp={camp} key={camp.id} index={index}/>
        })}
    </section>
  )
};

export default Camps;
