import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home'
import Revenue from './pages/Revenue';
import ScheduleSelection from './pages/ScheduleSelection';
import SeatSelection from './pages/SeatSelection/SeatSelection';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import MovieManagement from './pages/MovieManagement'
// import Register from "./pages/Login_Reset_Recover_Protect/components/Register"
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
  const Layout = ({ children }) => {
    return (
      <>
      <Header />
          {children}
      <Footer />
      </>
    );
  };
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/login" element={<Login />}  />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={ <Layout> <Home /> </Layout>}/> 
          <Route path="/home" element={ <Layout> <Home /> </Layout>}/> 
          <Route path="/schedule" element={ <Layout> <ScheduleSelection /> </Layout>} />
          <Route path="/seats" element={ <Layout> <SeatSelection /> </Layout>} />
          <Route path="/payment" element={<Layout> <Payment /> </Layout>} />
          <Route path="/payment/success" element={<Layout> <PaymentSuccess /> </Layout>} />
          <Route path="/revenue" element={<Layout> <Revenue /> </Layout>} />
          
          <Route path="/moviemanagement" element={<Layout> <MovieManagement/> </Layout>} />
          {/* <Route path="/register" element={<Register/>} /> */}
          
          
        </Routes>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;



