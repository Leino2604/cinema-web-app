import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import ScheduleSelection from './pages/ScheduleSelection';
import SeatSelection from './pages/SeatSelection';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/schedule" element={<ScheduleSelection/>} />
          <Route path="/seats" element={<SeatSelection/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/payment/success" element={<PaymentSuccess/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;



