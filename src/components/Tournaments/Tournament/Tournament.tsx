import React from 'react';
import { TournamentStructure } from '../../../types/event';
import { Link } from 'react-router-dom';
import './Tournament.scss';
import { createUrlName } from '../../../assets/functions/functions';

interface TournamentProps {
  tournament: TournamentStructure,
}

const Tournament: React.FC<TournamentProps> = ({tournament}) => {
  const {title, previewDescription} = tournament;
  return (
    <article className="tournament">
      <h3 className="tournament__title">{title}</h3>
      <p className="tournament__description">{previewDescription}</p>
      <Link 
        className="tournament__description-link"
        to={`./${createUrlName(title)}`}
      >
        wiecej
      </Link>
    </article>
  )
}

export default Tournament
