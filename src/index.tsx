import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {HashRouter as Router} from 'react-router-dom';
import { ResolutionProvider } from './assets/context/ResolutionContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ResolutionProvider>
      <Router>
        <App />
      </Router>
    </ResolutionProvider>
  </React.StrictMode>
);