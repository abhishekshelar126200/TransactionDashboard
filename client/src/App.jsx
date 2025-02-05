import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Table from './components/Table';
import All from './components/All';
import Feature from './components/Feature';
import AllHome from './components/AllHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllHome/>} />
        {/* <Route path="/feat" element={<Feature/>} /> */}
        <Route path="/table" element={<All/>} />
      </Routes>
    </Router>
  );
}

export default App;
