import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import ScheduleSelection from './pages/ScheduleSelection';
import SeatSelection from './pages/SeatSelection';
import Payment from './pages/Payment';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/schedule" element={<ScheduleSelection/>} />
          <Route path="/seats" element={<SeatSelection/>} />
          <Route path="/payment" element={<Payment/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;