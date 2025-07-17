import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 bg-gradient-to-br from-white/10 to-gray-400/10 transform-gpu animate-footer-particle-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4 animate-footer-section-3d">
              <div className="text-white">
                Sameer Krishn
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
              A versatile developer blending AI/ML, data science, full-stack engineering, and 3D web experiences to build smart, interactive, and future-ready applications. With hands-on expertise across deep learning, embedded systems, and modern web technologies, I create solutions that are both intelligent and visually compelling.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 animate-footer-section-3d" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-semibold text-white text-shadow-3d">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-gray-200 transition-colors text-sm hover:scale-105 transform duration-300 inline-block animate-footer-link-3d"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4 animate-footer-section-3d" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-lg font-semibold text-white text-shadow-3d">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/sam-2707"
                  className="p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700 transition-all duration-300 group hover:scale-110 shadow-3d transform-gpu animate-footer-social-3d"
                >
                  <Github size={20} className="text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sameer-krishn/"
                  className="p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-600 transition-all duration-300 group hover:scale-110 shadow-3d transform-gpu animate-footer-social-3d"
                  style={{ animationDelay: '0.1s' }}
                >
                  <Linkedin size={20} className="text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="mailto:krishnsameer54@gmail.com"
                  className="p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500 transition-all duration-300 group hover:scale-110 shadow-3d transform-gpu animate-footer-social-3d"
                  style={{ animationDelay: '0.2s' }}
                >
                  <Mail size={20} className="text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-footer-bottom-3d">
            <p className="text-gray-400 text-sm flex items-center space-x-1">
              <span>© {currentYear} Sameer Krishn. Crafted with</span>
              <Heart size={16} className="text-gray-400 animate-heart-3d" />
              <span>and cutting-edge tech</span>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors text-sm hover:scale-105 transform duration-300 animate-footer-legal-3d">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors text-sm hover:scale-105 transform duration-300 animate-footer-legal-3d" style={{ animationDelay: '0.1s' }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;