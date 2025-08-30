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
                2. Replace the div below with: */
                <img 
                  src="/about-profile.jpg" 
                  alt="About Mohit" 
                  className="w-80 h-80 mx-auto rounded-lg object-cover shadow-lg"
                />
              }
              <div className="w-80 h-80 mx-auto bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 font-medium shadow-lg">
                About Profile Image
              </div>
            </div>

            {/* Bio Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="prose prose-lg max-w-none">
                {/* CHANGE THIS: Replace with your actual bio content */}
                <p className="text-gray-700 leading-relaxed">
Hello! I'm Mohit, a computer science graduate passionate about building data-driven and cloud-native solutions. 
I have hands-on experience with Python, Java, SQL, and AWS, and I enjoy working on projects that combine backend development, 
data analytics, and NLP to solve real-world problems.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you'll find me exploring cloud technologies, DevOps tools, and modern data engineering frameworks 
                  like PySpark, Airflow, and Kafka. I believe in writing solutions that are scalable, maintainable, and meaningful, 
                  bridging the gap between software engineering and data insights.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  I’m always excited to learn, take on new challenges, and collaborate with teams that are driven by innovation 
                  and impactful problem-solving, especially in FinTech and product-based domains.
                </p>
              </div>

              {/* Stats or Highlights */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {/* CHANGE THESE: Update your stats */}
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Skills / Tech Stack</div>
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