import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
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
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Mission />
        <Chairman />
      </section>
      
      <Events />
      <Board />
      
      <ITSupport />
      <Footer />
    </div>
  );
}

export default App;