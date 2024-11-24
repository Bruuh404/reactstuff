import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Navbar from './components/Navbarcomponent'; // Import the Navbar component
import Footer from './components/Footer';

export default function App() {
  return (
    <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="./pages/Home" element={<Home />} />
        <Route path="./pages/page2" element={<Page2 />} />
        <Route path="./pages/page3" element={<Page3 />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
  )
}
