import React from 'react';
import Navbar from './Components/Navbar';
import Landing from './pages/Landing';
import Footer from './Components/Footer';
import Protected from './Protected';
import Signup from './pages/Signup';
import MyJournal from './Features/MyJournal';
import ToDo from './Features/ToDo';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const showNavbarFooter = location.pathname === '/';

  return (
    <div>
      {showNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/MyJournal" element={<Protected><MyJournal /></Protected>} />
        <Route path="/ToDo" element={<Protected><ToDo /></Protected>} />
      </Routes>
      {showNavbarFooter && <Footer />}
    </div>
  );
};

export default App;
