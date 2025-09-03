import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

const Projects: React.FC = () => {
  // CHANGE THIS: Replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Intelligent AI System for Analyzing Financial News",
      description: "An AI-driven solution that analyzes financial news to extract key trends, sentiments, and crisis signals. Features include topic modeling with BERTopic, sentiment analysis with FinBERT, and timeline-based tracking of narrative shifts to detect evolving market conditions.",
      // TO ADD YOUR PROJECT IMAGE: Save as 'project1.jpg' in public folder and use "/project1.jpg"
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "NLP", "BERTopic", "FinBERT", "Streamlit"],
      githubUrl: "https://github.com/mohitnalluri/finnews-analyzer", // CHANGE THIS
      //demoUrl: "https://ecommerce-demo.netlify.app" // CHANGE THIS
    },
    {
      id: 2,
      title: "Student Management App",
      description: "A full-stack application for managing student records with secure role-based authentication (Spring Security). Features include student enrollment, course management, and attendance tracking, with a responsive Thymeleaf-based UI and a MySQL backend for data storage.",
      // TO ADD YOUR PROJECT IMAGE: Save as 'project2.jpg' in public folder and use "/project2.jpg"
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Java", "Springboot", "Thymeleaf", "MySQL"],
      githubUrl: "https://github.com/mohitnalluri/student-management", // CHANGE THIS
      //demoUrl: "https://taskmanager-demo.vercel.app" // CHANGE THIS
    },
    {
      id: 3,
      title: "AI-Powered CloudOps Assistant",
      description: "An AI-powered assistant that integrates with AWS accounts to handle data queries (metrics, logs, costs) and infra actions (resource provisioning, CLI/Terraform execution) from natural language. Features include secure IAM integration, confirmation-based infra execution, and real-time dashboards for insights and safe automation.",
      // TO ADD YOUR PROJECT IMAGE: Save as 'project3.jpg' in public folder and use "/project3.jpg"
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "TypeScript", "FastAPI", "TailwindCSS", "PostgreSQL"],
      githubUrl: "https://github.com/mohitnalluri/cloudops-agent", // CHANGE THIS
      //demoUrl: "https://cloudops-agent.vercel.app" // CHANGE THIS
    },
    /*{
      id: 4,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, comment system, and SEO optimization. Built for performance and user engagement.",
      // TO ADD YOUR PROJECT IMAGE: Save as 'project4.jpg' in public folder and use "/project4.jpg"
      image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Gatsby", "GraphQL", "Netlify CMS"],
      githubUrl: "https://github.com/yourusername/blog-platform", // CHANGE THIS
      demoUrl: "https://myblog-platform.gatsbyjs.io" // CHANGE THIS
    },*/
    {
      id: 4,
      title: "Expense Tracker",
      description: "A full-stack MERN application to track and manage daily expenses with secure authentication, category management, and interactive dashboards. Features include detailed reports, budget insights, and a responsive UI for seamless expense tracking.",
      // TO ADD YOUR PROJECT IMAGE: Save as 'project5.jpg' in public folder and use "/project5.jpg"
      image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap"],
      githubUrl: "https://github.com/mohitnalluri/expense-tracker", // CHANGE THIS
      demoUrl: "https://expense-tracker-dusky-three.vercel.app" // CHANGE THIS
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "This very portfolio website you're viewing! Built with modern technologies and best practices for performance and accessibility.",
      // TO ADD YOUR PROJECT IMAGE: Save as 'project6.jpg' in public folder and use "/project6.jpg"
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/mohitnalluri/myportfolio", // CHANGE THIS
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and passion for development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;