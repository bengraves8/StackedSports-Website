import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import App from './App.tsx';
import './index.css';

// Initialize GA4 with configuration options
ReactGA.initialize('G-VJKVVTV8H5', {
  testMode: process.env.NODE_ENV !== 'production',
  debug: process.env.NODE_ENV !== 'production'
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
