import React from 'react';
import { tournaments } from '../../assets/data/tournaments';
import Tournament from './Tournament/Tournament';
import './Tournaments.scss';

const Tournaments = () => {
  return (
    <section className="tournaments" id="tournaments">
      <h2 className="tournaments__title">Turnieje</h2>
      <div className="tournaments__wrapper">
      {tournaments.map(tournament => {
        return <Tournament tournament={tournament} key={tournament.id}/>
      })}
      </div>
    </section>
  )
}

export default Tournaments
