import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

const Projects: React.FC = () => {
  // CHANGE THIS: Replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      // TO ADD YOUR PROJECT IMAGE: Save as 'project1.jpg' in public folder and use "/project1.jpg"
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform", // CHANGE THIS
      demoUrl: "https://ecommerce-demo.netlify.app" // CHANGE THIS
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      // TO ADD YOUR PROJECT IMAGE: Save as 'project2.jpg' in public folder and use "/project2.jpg"
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/task-manager", // CHANGE THIS
      demoUrl: "https://taskmanager-demo.vercel.app" // CHANGE THIS
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive charts, and responsive design for all devices.",
      // TO ADD YOUR PROJECT IMAGE: Save as 'project3.jpg' in public folder and use "/project3.jpg"
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
      githubUrl: "https://github.com/yourusername/weather-dashboard", // CHANGE THIS
      demoUrl: "https://weather-dash.netlify.app" // CHANGE THIS
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, comment system, and SEO optimization. Built for performance and user engagement.",
      // TO ADD YOUR PROJECT IMAGE: Save as 'project4.jpg' in public folder and use "/project4.jpg"
      image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Gatsby", "GraphQL", "Netlify CMS"],
      githubUrl: "https://github.com/yourusername/blog-platform", // CHANGE THIS
      demoUrl: "https://myblog-platform.gatsbyjs.io" // CHANGE THIS
    },
    {
      id: 5,
      title: "Finance Tracker",
      description: "Personal finance tracking application with expense categorization, budget planning, and financial insights with interactive visualizations.",
      // TO ADD YOUR PROJECT IMAGE: Save as 'project5.jpg' in public folder and use "/project5.jpg"
      image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "D3.js", "Express", "MySQL"],
      githubUrl: "https://github.com/yourusername/finance-tracker", // CHANGE THIS
      demoUrl: "https://finance-tracker-demo.herokuapp.com" // CHANGE THIS
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "This very portfolio website you're viewing! Built with modern technologies and best practices for performance and accessibility.",
      // TO ADD YOUR PROJECT IMAGE: Save as 'project6.jpg' in public folder and use "/project6.jpg"
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/yourusername/portfolio", // CHANGE THIS
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
                    
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
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