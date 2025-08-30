import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  // CHANGE THESE: Replace with your actual social media links
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/your-profile', // CHANGE THIS
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/your-username', // CHANGE THIS
      color: 'hover:text-gray-800'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      url: 'https://twitter.com/your-handle', // CHANGE THIS
      color: 'hover:text-blue-400'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand/Logo Section */}
            <div>
              {/* CHANGE THIS: Replace with your name */}
              <h3 className="text-xl font-bold mb-4">John Doe</h3>
              <p className="text-gray-400 leading-relaxed">
                {/* CHANGE THIS: Replace with your footer description */}
                Full-Stack Developer passionate about creating exceptional digital experiences 
                and solving complex problems through code.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(`#${item.toLowerCase()}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                {/* CHANGE THESE: Replace with your actual contact details */}
                <p>john.doe@example.com</p>
                <p>+1 (555) 123-4567</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400">
                {/* CHANGE THIS: Replace with your name */}
                <span>© {currentYear} John Doe. Made with</span>
                <Heart size={16} className="text-red-500" />
                <span>and lots of coffee.</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${link.color} transition-all duration-200 transform hover:scale-110`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;