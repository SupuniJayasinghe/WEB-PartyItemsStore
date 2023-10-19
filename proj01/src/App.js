import React, { useState } from 'react';
import NewHeader from './components/NewHeader';
import CreateAcc from './pages/CreateAcc';
import MyAccount from './pages/Login';
import Home from './pages/Home'; // Import the Home component
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Birthday from './components/Birthday';
import Birthdays from './pages/Birthdays';
import BirthdayItems from './pages/BirthdayItems';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAcc />} />
          <Route path="/login" element={<Login />} />

          <Route path="/bday" element={<BirthdayItems />} />
          <Route path="items" element={<BirthdayItems />}/>
          <Route path="cart" element={<ShoppingCart/>}/>
          {/* Add other routes here */}
        </Routes>
      </Router>
    </div>
  );
}


export default App;
