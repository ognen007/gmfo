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
      
      {/* Sponsors Section */}
      <section className="w-full bg-gray-50 py-4 overflow-hidden border-t border-b border-gray-200">
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of sponsors */}
            <div className="flex space-x-8 min-w-max">
              <div className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-400 text-xs font-medium">Sponsor 1</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-400 text-xs font-medium">Sponsor 2</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-400 text-xs font-medium">Sponsor 3</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-400 text-xs font-medium">Sponsor 4</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-400 text-xs font-medium">Sponsor 5</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-400 text-xs font-medium">Sponsor 6</span>
              </div>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-8 min-w-max ml-8">
              <div className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-400 text-xs font-medium">Sponsor 1</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-400 text-xs font-medium">Sponsor 2</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-400 text-xs font-medium">Sponsor 3</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-400 text-xs font-medium">Sponsor 4</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-400 text-xs font-medium">Sponsor 5</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border">
                <span className="text-gray-400 text-xs font-medium">Sponsor 6</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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