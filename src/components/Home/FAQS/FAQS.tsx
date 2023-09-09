import React from 'react';
import { faqs } from '../../../assets/data/faqs';
import FAQ from './FAQ/FAQ';
import './FAQS.scss';
import { Link } from 'react-router-dom';

const FAQS = () => {
  return (
    <section className="faqs" id="faq">
      <h2 className="faqs__title">FAQ</h2>
      <ol className="faqs__list">
        {faqs.map((faq, index) => {
          return <FAQ faq={faq} key={faq.id} questionIndex={index + 1}/>
        })}
      </ol>
      <p className="faqs__extra">
      Masz inne pytania? Zapraszamy do <Link to={`./contact`}className="faqs__extra-link">kontaktu!</Link>
      </p>
    </section>
  )
}

export default FAQS;
