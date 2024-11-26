import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <React.StrictMode>
    <Router basename="/reactstuff">
    <Navbar />
      <Routes>
        <Route path="/page1" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
  );
}

export default App;
