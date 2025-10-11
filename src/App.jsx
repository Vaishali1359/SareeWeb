import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Othersubpage/Footer';
// import WhatsAppButton from './Components/WhatsAppButton'; // ✅ Import WhatsApp button
import WhatsAppButton from './Components/Button/WhatsAppButton';
import About from './Components/AboutMain/About';
import AllSaree from './Components/Othersubpage/AllSaree'
import ContactForm from './Components/Othersubpage/ContactForm';
import CallButton from './Components/Button/CallButton';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* Add other routes as needed */}
          <Route path='/gallery' element={<AllSaree />} />
          <Route path='/contactus' element={<ContactForm />} />
        </Routes>
      </div>

      <Footer />

      {/* ✅ WhatsApp button appears on all pages */}
      <WhatsAppButton number="917846954967" />
      <CallButton number='917846954967' />
    </div>
  );
};

export default App;
