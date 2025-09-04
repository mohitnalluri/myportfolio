import React from 'react';
import { Server, Code2, Database, BarChart, Globe, Smartphone, Zap, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  // Change your skills here
const skillCategories = [
  {
    title: "Programming & Databases",
    icon: <Server size={24} />,
    skills: ["Python", "Java", "SQL (MySQL, PostgreSQL)"]
  },
  {
    title: "Data & ML",
    icon: <BarChart size={24} />,
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"]
  },
  {
    title: "NLP & Transformers",
    icon: <Globe size={24} />,
    skills: ["Topic Modeling", "Sentiment Analysis", "BERTopic", "FinBERT"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Zap size={24} />,
    skills: ["AWS", "Git", "Linux", "CI/CD", "Docker"]
  },
  {
    title: "Backend Development",
    icon: <Server size={24} />,
    skills: ["Spring Boot", "REST APIs", "FastAPI", "Maven"]
  }
];



  const coreSkills = [
    { name: "Python", level: 95 },
    {name: "Java", level: 90},
    { name: "Database Design", level: 85 },
    { name: "React", level: 90 },
    { name: "NLP", level: 85 },
    { name: "Linux", level: 75 },
    { name: "AWS", level: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200 hover:border-blue-300 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Skills with Progress Bars */}
          {/* Core Skills with Progress Bars */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Core Competencies
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {coreSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;