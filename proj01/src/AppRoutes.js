import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import CreateAcc from './pages/CreateAcc';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} >
         <Route path="/creates" element={<CreateAcc />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
