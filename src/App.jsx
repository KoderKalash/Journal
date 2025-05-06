import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './pages/Landing';
import Footer from './Components/Footer';
import Protected from './Protected';
import Signup from './pages/Signup';
import MyJournal from './Features/MyJournal';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const App = () => {

  const location = useLocation();
  const hideNavbarFooter = location.pathname === '/login';
  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={
          
            <Landing />
          
        } />
        {/* <Route path="/signup" element={<Signup />} /> */}

        <Route path="/MyJournal" element={ <Protected> <MyJournal /> </Protected>} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default App
