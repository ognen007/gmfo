import React from 'react';
import { Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Mission from './components/Mission';
import Chairman from './components/Chairman';
import Events from './components/Events';
import Board from './components/Board';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      
      <Contact />
            {/* IT Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 pb-12 border border-gray-200">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-3 bg-primary rounded-full mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 font-playfair">
                  IT Support
                </h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="md:grid md:grid-cols-3">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src="https://i.ibb.co/wZ9d38K4/image.png"
                      alt="IT Support Professional"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="md:col-span-2 p-8 flex flex-col justify-center space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-playfair">
                        Ognen Veljanovski
                      </h3>
                      <p className="text-secondary font-medium mb-3 text-sm">Software Engineer, Entrepreneur, Innovator</p>
                    </div>
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Software Engineer & Entrepreneur. Founder of Excelerator-AI, building custom AI-powered CRM solutions for industries such as construction, finance, and real estate. Passionate about combining technology and business strategy to deliver innovation.
                      </p>
                    </div>
                    
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm font-medium text-gray-600">Professional Network</span>
                      </div>
                      <div className="flex space-x-3">
                        <a href="https://www.linkedin.com/in/ognen-veljanovski-470069238/" target="_blank" rel="noopener noreferrer" className="text-gray-600">
              <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;