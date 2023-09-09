import React from 'react';
import sponsorTshirt from '../../assets/images/sponsors/koszulka__sponsor.png'
import './SponsorDescription.scss';
import { Link } from 'react-router-dom';

const SponsorDescription = () => {
  return (
    <section className="sponsor-description">
      <h2 className="sponsor-description__title">OFERTA DLA SPONSORA</h2>
      <article className="sponsor-description__value">
        <p className="sponsor-description__paragraph">
          Ogromne zainteresowanie Festiwalem Hokeja w Polsce, ale też za granicami naszego kraju sprawia, że wciąż chcemy się rozwijać i oferować dzieciom i ich rodzicom jak najwyższą jakość szkolenia w dyscyplinie olimpijskiej jaką jest hokej na lodzie. Naszym celem jest zapewnienie zawodnikom i zawodniczkom poziomu rozwoju zbliżonego do systemu szkolenia jaki oferują państwa hokejowych potęg, za czym stoi rzecz jasna regularne finansowanie strategiczne ze strony lokalnych związków hokeja na lodzie oraz od prze dsiębiorstwom prywatnych.Dla wszystkich podmiotów zainteresowanych wsparciem naszej inicjatywy oferujemy reklamę na: 
        </p>
        <p className="sponsor-description__paragraph sponsor-description__paragraph--list">
          1. koszulkach meczowych <br />
          2. koszulkach obozowych <br />
          3. banerach, rollup’ach oraz plakatach <br />
          4. mediach społecznościowych (facebook, instagram, strona www)<br />
          5. innych gadżetach promocyjnych 
        </p>
      </article>
      <img 
        src={sponsorTshirt} 
        alt="sponsor t-shirt" 
        className="sponsor-description__image" 
      />
      <Link to="/contact" className="sponsor-description__contact-link">
        <button className="sponsor-description__contact-button">
          Napisz do nas
        </button>
      </Link>
    </section>
  )
}

export default SponsorDescription
