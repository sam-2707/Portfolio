import React from 'react';
import { Github, ExternalLink, Calendar, Star, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Pothole Detection and Smart Navigation System",
      description: "An intelligent system that detects potholes in road images using deep learning and dynamically reroutes vehicles around them with smart path planning.",
      image: "https://i.dailymail.co.uk/1s/2021/12/09/20/51566381-0-image-a-8_1639081829906.jpg",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Deep Learning", "Computer Vision"],
        github: "https://github.com/sam-2707/Pothole_Detecor",
        live: "https://github.com/sam-2707/Pothole_Detecor",
        date: "Jan 2025 - Present",
    },
    {
      title: "Type 2 Diabetes Mellitus Pediction using Advance Algorithms and Machine Learning",
      description: "A machine learning model that predicts the likelihood of Type 2 Diabetes Mellitus using advanced algorithms and machine learning techniques.",
      image: "https://eco-intelligent.com/wp-content/uploads/2020/09/genes.jpg?w=900",
      tech: ["Python", "TensorFlow", "Keras", "Machine Learning", "Advance Algorithms"],
      github: "https://github.com/sam-2707/Diabetes-Prediction-Model",
      live: "https://github.com/sam-2707/Diabetes-Prediction-Model",
      date: "August 2024 - Present",
    },
    {
      title: "Processing-Element-for-DOA",
      description: "A hardware-accelerated Processing Element (PE) is designed and implemented for efficient Direction-of-Arrival (DOA) estimation using OMP, featuring complex arithmetic, control via FSM, and optimized parallel computation on FPGA.",
      image: "https://static.vecteezy.com/system/resources/previews/024/397/262/non_2x/central-processing-unit-icon-design-microchip-sign-and-symbol-computer-element-illustration-vector.jpg",
      tech: ["Xilinx", "Vivado", "Verilog", "FPGA", "Hardware Design"],
      github: "https://github.com/sam-2707/Processing-Element-for-DOA",
      live: "https://github.com/sam-2707/Processing-Element-for-DOA",
      date: "February 2025 - March 2025",
    },
    {
      title: "Gaming Tournmaent Registration System",
      description: "A dynamic website showcasing 'GG' — a gaming event featuring tournaments like Valorant, FIFA, BGMI, Free Fire, a VR/AR hackathon, and an immersive console gaming arena.",
      image: "https://cdn.bluent.com/images/wher-are-we-going.webp",
      tech: ["Vite.js", "Tailwind CSS", "React", "Node.js", "Express.js", "MongoDB", "Firebase"],
      github: "https://github.com/sam-2707/forge-main",
      live: "https://forge-main.vercel.app",
      date: "2023",
    },
    {
      title: "5G + LiFi",
      description: "Augmented reality product configurator allowing customers to visualize and customize products in their space.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["WebXR", "Three.js", "AR.js", "React"],
      github: "#",
      live: "#",
      date: "2023",
    },
    {
      title: "Distributed System",
      description: "Real-time 3D music visualizer with audio-reactive particles, dynamic lighting, and customizable effects.",
      image: "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Web Audio API", "Three.js", "GLSL", "Canvas"],
      github: "#",
      live: "#",
      date: "2023",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900/95 to-black/95 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* 3D Dodecahedrons */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 bg-gradient-to-br from-gray-300/15 to-gray-500/15 transform-gpu animate-dodecahedron-spin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)'
            }}
          />
        ))}

        {/* 3D Torus shapes */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`torus-${i}`}
            className="absolute w-20 h-20 border-4 border-white/20 rounded-full transform-gpu animate-torus-rotate"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          >
            <div className="w-8 h-8 border-2 border-gray-400/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-inner-torus"></div>
          </div>
        ))}

        {/* 3D Wireframe Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="wireframe-3d animate-wireframe-pulse"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-3d">
              <span className="text-white">My</span>
              <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent animate-gradient-3d"> Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Immersive 3D experiences and cutting-edge web applications
            </p>
          </div>

          {/* 3D Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-500/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-3d-large animate-project-card-3d"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image with 3D Effects */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-300"></div>
                  
    
                  
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-gray-900/80 rounded-full px-3 py-1 backdrop-blur-sm shadow-3d">
                    <Calendar size={14} className="text-gray-400" />
                    <span className="text-sm text-gray-400">{project.date}</span>
                  </div>
                  
                  {/* 3D Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="p-4 bg-gray-900/80 rounded-xl hover:bg-gray-800 transition-colors transform hover:scale-110 shadow-3d backdrop-blur-sm animate-action-button-3d"
                      >
                        <Github size={24} className="text-white" />
                      </a>
                      <a
                        href={project.live}
                        className="p-4 bg-gray-600/80 rounded-xl hover:bg-gray-700 transition-colors transform hover:scale-110 shadow-3d backdrop-blur-sm animate-action-button-3d"
                      >
                        <ExternalLink size={24} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content with 3D Effects */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300 text-shadow-3d">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* 3D Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-gray-500/50 hover:text-white transition-all duration-300 hover:scale-105 shadow-3d-subtle animate-tech-tag-3d"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 3D Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 animate-link-3d"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 animate-link-3d"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3D View More Button */}
          <div className="text-center mt-12">
            <button className="px-10 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-3d relative overflow-hidden group animate-cta-3d">
              <span className="relative z-10">Explore More Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;