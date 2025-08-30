import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn more about my journey, experience, and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 md:order-1">
              {/* 
                TO ADD YOUR ABOUT PROFILE IMAGE:
                1. Save your image as 'about-profile.jpg' in the public folder
                2. Replace the div below with:
                <img 
                  src="/about-profile.jpg" 
                  alt="About John Doe" 
                  className="w-80 h-80 mx-auto rounded-lg object-cover shadow-lg"
                />
              */}
              <div className="w-80 h-80 mx-auto bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 font-medium shadow-lg">
                About Profile Image
              </div>
            </div>

            {/* Bio Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="prose prose-lg max-w-none">
                {/* CHANGE THIS: Replace with your actual bio content */}
                <p className="text-gray-700 leading-relaxed">
                  Hello! I'm John, a passionate full-stack developer with over 5 years of experience 
                  building modern web applications. I specialize in React, Node.js, and cloud technologies, 
                  with a keen eye for user experience and clean code architecture.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I believe in writing code that 
                  is not only functional but also maintainable and scalable.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  I'm always excited to take on new challenges and collaborate with teams that share 
                  my passion for creating exceptional digital experiences.
                </p>
              </div>

              {/* Stats or Highlights */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {/* CHANGE THESE: Update your stats */}
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;