import React from 'react';
import { BrainCircuit, BarChart3, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML",
      icon: <BrainCircuit className="text-gray-300" size={32} />,
      skills: [
        { name: "TensorFlow / PyTorch", level: 85 },
        { name: "Scikit-learn / XGBoost", level: 90 },
        { name: "Deep Learning (CNN/RNN)", level: 80 },
        { name: "Reinforcement Learning", level: 75 },
      ]
    },
    {
      title: "Data Science",
      icon: <BarChart3 className="text-gray-400" size={32} />,
      skills: [
        { name: "Pandas / NumPy", level: 95 },
        { name: "Matplotlib / Seaborn / Plotly", level: 90 },
        { name: "Data Cleaning & Feature Engg", level: 90 },
        { name: "Model Evaluation / Tuning", level: 85 },
      ]
    },
    {
      title: "Core Electronics",
      icon: <Cpu className="text-gray-500" size={32} />,
      skills: [
        { name: "Verilog / VHDL", level: 80 },
        { name: "Embedded C / C++", level: 65 },
        { name: "ARM / ESP32 / AVR", level: 70 },
        { name: "Signal Processing (MATLAB)", level: 60 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* 3D Pyramids */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 bg-gradient-to-br from-white/15 to-gray-400/15 transform-gpu animate-pyramid-spin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
          />
        ))}

        {/* 3D Octahedrons */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`octa-${i}`}
            className="absolute w-16 h-16 bg-gradient-to-br from-gray-300/20 to-gray-500/20 transform-gpu animate-octahedron-rotate"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
            }}
          />
        ))}

        {/* 3D Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="perspective-grid animate-perspective-shift"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-3d">
              <span className="text-white">My</span>
              <span className="text-white"> Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I use to create immersive digital experiences
            </p>
          </div>

          {/* 3D Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-3d-large animate-skill-card-3d backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-900/50 rounded-2xl mb-4 hover:scale-110 transition-transform duration-300 transform-gpu animate-icon-float shadow-3d">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white text-shadow-3d">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3 group/skill">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300 text-shadow-3d">{skill.name}</span>
                        <span className="text-sm text-gray-400 group-hover/skill:text-gray-300 transition-colors duration-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner-3d">
                        <div
                          className="bg-gradient-to-r from-gray-400 to-white h-3 rounded-full transition-all duration-1000 ease-out hover:shadow-3d relative overflow-hidden animate-skill-bar-3d"
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full animate-shimmer-3d"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 3D Status Indicator */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-gray-800/50 rounded-full px-8 py-4 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-3d animate-status-3d">
              <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse-3d shadow-3d"></div>
              <span className="text-gray-300 text-shadow-3d">Always learning and evolving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;