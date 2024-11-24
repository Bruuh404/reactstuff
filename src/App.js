import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Navbar from './components/Navbarcomponent'; // Import the Navbar component
import Footer from './components/Footer';

function App() {
  return (
    <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
  )
}

export default App;
