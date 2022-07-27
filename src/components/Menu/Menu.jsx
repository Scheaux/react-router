import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DriftPage from './DriftPage';
import TimeAttackPage from './TimeAttackPage';
import ForzaPage from './ForzaPage';
import Navigation from './Navigation';

function Menu() {
  return (
    <div className='wrap'>
      <BrowserRouter basename='react-router'>
        <Navigation />
        <div className='page'>
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/drift' element={<DriftPage />} />
            <Route path='/timeattack' element={<TimeAttackPage />} />
            <Route path='/forza' element={<ForzaPage />} />
            <Route
              path='*'
              element={<div style={{ color: 'red' }}>404 NOT FOUND</div>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Menu;
