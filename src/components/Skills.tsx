import React from 'react';
import { Code2, Database, Globe, Smartphone, Zap, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  // Change your skills here
const skillCategories = [
  {
    title: "Backend & Databases",
    icon: <Server size={24} />,
    skills: ["Java", "Python", "Spring Boot", "FastAPI", "PostgreSQL", "MySQL", "REST APIs"]
  },
  {
    title: "Web Technologies",
    icon: <Globe size={24} />,
    skills: ["HTML", "Tailwind CSS", "JavaScript", "React", "GraphQL", "WebSockets"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Zap size={24} />,
    skills: ["AWS (S3, EC2, Lambda, RDS)", "Docker", "CI/CD", "Git", "Linux", "Terraform", "Nginx", "Airflow", "Kafka"]
  },
  {
    title: "Data & Analytics",
    icon: <BarChart size={24} />,
    skills: ["Data Analysis", "Pandas", "NumPy", "PySpark", "Machine Learning", "NLP", "BERTopic", "FinBERT"]
  },
 {/*} {
    title: "Design & UX",
    icon: <Palette size={24} />,
    skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "Wireframing"]
  }*/}
];


  const coreSkills = [
    { name: "Python", level: 95 },
    {name: "Java", level: 90}
    { name: "Database Design", level: 85 }
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 88 },
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
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-{
      title: "Frontend Development",
      icon: <Code2 size={24} />,
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SASS"]
    },
    {
      title: "Backend Development", 
      icon: <Database size={24} />,
      skills: ["Python", "Javgray-800 mb-8 text-center">
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