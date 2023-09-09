import React from 'react';
import Header from './Header/Header';
import CoachCarousel from './CoachCarousel/CoachCarousel';
import Camps from './Camps/Camps';
import './Home.scss';
import Sponsors from './Sponsors/Sponsors';
import Tournaments from '../Tournaments/Tournaments';
import Exchange from './Exchange/Exchange';
import FAQS from './FAQS/FAQS';
import Contact from './Contact/Contact';
import Footer from '../Footer/Footer';


function Home() {
  
  return (
    <div className='home'>
      <header className='home__header'>
        <Header /> 
      </header>
      <main className='home__content'>
        <CoachCarousel />
        <Camps />
        <Sponsors />
        <Tournaments />
        <Exchange />
        <FAQS />
        <Contact />
        <Footer />
      </main>
      

    </div>
  )
}

export default Home
