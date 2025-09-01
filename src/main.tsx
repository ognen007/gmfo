import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import HeritagePreservation from './components/HeritagePreservation.tsx';
import { LanguageProvider } from './context/LanguageContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects/heritage-preservation" element={<HeritagePreservation />} />
        </Routes>
      </Router>
    </LanguageProvider>
  </StrictMode>
);
