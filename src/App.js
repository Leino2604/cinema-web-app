import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ScheduleSelection from './pages/ScheduleSelection';
import SeatSelection from './pages/SeatSelection';
import Payment from './pages/Payment';
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
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;