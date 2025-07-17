import React from 'react';
import { BrainCircuit, BarChart3, Cpu } from 'lucide-react';
import myPhoto from '../assets/myphoto.jpg';

const About = () => {
  const highlights = [
    {
      icon: <BrainCircuit className="text-gray-300 group-hover:animate-pulse" size={24} />,
      title: "AI & Machine Learning",
      description: "Building intelligent systems with deep learning, transformers, and reinforcement learning."
    },
    {
      icon: <BarChart3 className="text-gray-400 group-hover:animate-pulse" size={24} />,
      title: "Data Science",
      description: "Extracting insights with data analysis, visualization, and advanced model tuning."
    },
    {
      icon: <Cpu className="text-gray-500 group-hover:animate-pulse" size={24} />,
      title: "Core Electronics",
      description: "Designing embedded systems, signal processing, and PCB development."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900/95 to-black/95 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 via-white to-gray-500 animate-gradient-flow"></div>
        
        {/* 3D Floating Diamonds */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 bg-gradient-to-br from-gray-300/20 to-gray-500/20 transform-gpu animate-diamond-spin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
            }}
          />
        ))}

        {/* 3D Hexagons */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`hex-${i}`}
            className="absolute w-16 h-16 bg-gradient-to-br from-white/15 to-gray-400/15 transform-gpu animate-hexagon-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with 3D Effect */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-3d">
              <span className="text-white">About</span>
              <span className="text-white"> Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Passionate about creating digital experiences that push the boundaries of what's possible
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - 3D Avatar */}
            <div className="relative animate-fade-in-left">
              <div className="relative z-10">
                <div className="w-full max-w-md mx-auto aspect-square rounded-3xl bg-gradient-to-br from-gray-600/20 to-gray-800/20 p-8 flex items-center justify-center hover:from-gray-500/30 hover:to-gray-700/30 transition-all duration-500 group transform-gpu animate-3d-tilt shadow-3d-large">
                  <img
                    src={myPhoto}
                    alt="Sameer Krishn"
                    className="rounded-2xl w-full h-full object-cover group-hover:scale-110 transition-all duration-500 animate-user-float"
                  />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl bg-gradient-to-br from-gray-500/20 to-gray-700/20 -z-10 animate-3d-shadow"></div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6 animate-fade-in-right">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white text-shadow-3d">Hi there! I'm Sameer Krishn</h3>
                <p className="text-gray-300 leading-relaxed">
                A versatile developer blending AI/ML, data science, full-stack engineering, and 3D web experiences to build smart, interactive, and future-ready applications. With hands-on expertise across deep learning, embedded systems, and modern web technologies, I create solutions that are both intelligent and visually compelling.

                </p>
                <p className="text-gray-300 leading-relaxed">
                When I’m not training models or crafting immersive 3D interfaces, you’ll find me experimenting with microcontrollers, optimizing machine learning workflows, or contributing to projects that bridge hardware, software, and design.
                </p>
              </div>

              {/* 3D Highlights */}
              <div className="grid gap-4 mt-8">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-3d-subtle animate-card-3d">
                    <div className="flex-shrink-0 p-3 bg-gray-800 rounded-xl group hover:bg-gray-700 transition-colors duration-300 transform-gpu animate-icon-3d">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-shadow-3d">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;