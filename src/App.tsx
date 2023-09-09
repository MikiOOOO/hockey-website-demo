import React, { useEffect} from 'react';
import './App.css';
import { Route, Routes,Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import { Device } from './types/device';
import NavbarDesktop from './components/NavbarDesktop/NavbarDesktop';
import NavbarMobile from './components/NavbarMobile/NavbarMobile';
import { useResolutionContext } from './assets/context/ResolutionContext';
import { createUrlName } from './assets/functions/functions';
import { tournaments } from './assets/data/tournaments';
import { camps } from './assets/data/camps';
import { exchange } from './assets/data/exchange';
import EventDescription from './components/EventDescription/EventDescription';
import ContactDescription from './components/ContactDescription/ContactDescription';
import SponsorDescription from './components/SponsorDescription/SponsorDescription';
import SignUpForm from './components/SignUpForm/SignUpForm';
// import Footer from './components/Footer/Footer';


 


function App() {
  const { device } = useResolutionContext();
  const location = useLocation();
  const borderColor = {
    borderColor: `${location.pathname === '/' ? 'whitesmoke' : 'lightgray'}`
  }

  const { pathname, hash, key } = useLocation();

  console.log(pathname, hash, key);

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      // setTimeout(() => {
      
      // }, 0);
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [pathname, hash, key]); // do this on route change


  return (
    <>
      {/* <Link to="/">Home</Link> */}
      { device === Device.DESKTOP ?  
      <NavbarDesktop style={borderColor}/> 
      :<NavbarMobile /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} >
        <Route path="#our-crew" element={<Home />} />
         
        </Route>
        {tournaments.map(tournament => (
          <Route path={`${createUrlName(tournament.title)}`} element={<EventDescription event={tournament} />} />
        ))}
        {camps.map(camp => (
          <Route path={`${createUrlName(camp.title)}`} element={<EventDescription event={camp} />} />
        ))}
        <Route path={`${createUrlName(exchange.title)}`} element={<EventDescription event={exchange} />} />
        <Route path="/sponsors" element={<SponsorDescription />} />
        <Route path="/sign-up"  element={<SignUpForm/>}/>
        <Route path="/contact"  element={<ContactDescription />} />

      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
