import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './pages/Landing';
import Footer from './Components/Footer';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const App = () => {

  const location = useLocation();
  const hideNavbarFooter = location.pathname === '/signup';
  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default App
