import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import History from './pages/History';
import ScrollToTop from './pages/scroll';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop /> 
      <Routes>
        <Route path='/historia' element={<History />} />
        <Route path='/' element={<App />} />
        <Route path='/eclipse' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
