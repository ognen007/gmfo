import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sponsors from './components/Sponsors';
import Mission from './components/Mission';
import Chairman from './components/Chairman';
import Events from './components/Events';
import Board from './components/Board';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ITSupport from './components/ITSupport';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Header />
      <Sponsors />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div id="mission">
          <Mission />
        </div>
        <Chairman />
      </section>
      
      <div id="endeavors">
        <Events />
      </div>
      <Board />
      <div id="contact">
        <Contact />
      </div>
      
      <ITSupport />
      <Footer />
    </div>
  );
}

export default App;