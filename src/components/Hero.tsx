import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="h-screen min-h-[700px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-40">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            {/* 
              TO ADD YOUR PROFILE PHOTO:
              1. Save your image as 'profile.jpg' in the public folder
              2. Replace the div below with: */
              <img 
                src="/profile.jpg" 
                alt="Mohit Nalluri" 
                className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg"
              />
            }
            <div className="w-48 h-48 mx-auto bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-sm font-medium shadow-lg">
              Profile Photo
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-fade-in-delay">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              {/* CHANGE THIS: Replace with your actual name */}
              Mohit Sriram Narayana Nalluri
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              {/* CHANGE THIS: Replace with your professional tagline */}
             Backend & Cloud Enthusiast | Data-Driven Problem Solver
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              {/* CHANGE THIS: Replace with your brief description */}
              Passionate about building scalable, data-driven solutions that solve real-world problems 
              and leverage cloud technologies for meaningful impact.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={scrollToAbout}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              
              {/* 
                TO ADD YOUR CV:
                1. Save your CV as 'cv.pdf' in the public folder
                2. Replace the button below with: */
                <a 
                  href="/cv.pdf" 
                  download="MohitNalluri_CV.pdf"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </a>
              }
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center gap-2">
                <Download size={20} />
                Download CV
              </button>
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;