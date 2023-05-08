import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Revenue from './pages/Revenue';
import ScheduleSelection from './pages/ScheduleSelection';
import SeatSelection from './pages/SeatSelection/SeatSelection';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
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
          <Route path="/payment/success" element={<PaymentSuccess/>} />
          <Route path="/revenue" element={<Revenue/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;



