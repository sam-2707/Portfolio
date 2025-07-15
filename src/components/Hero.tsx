import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* 3D Floating Cubes */}
        <div className="absolute inset-0 perspective-1000">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 bg-gradient-to-br from-white/20 to-gray-400/30 transform-gpu animate-cube-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
                transform: `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) rotateZ(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>

        {/* 3D Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`geo-${i}`}
              className="absolute w-24 h-24 bg-gradient-to-br from-gray-300/20 to-gray-500/20 transform-gpu animate-geometric-spin"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
              }}
            />
          ))}
        </div>

        {/* 3D Spheres */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={`sphere-${i}`}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-gray-400/25 to-gray-600/25 transform-gpu animate-sphere-bounce shadow-3d"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>

        {/* 3D Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid-3d-mono animate-grid-3d"></div>
        </div>

        {/* Floating 3D Rings */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className="absolute w-20 h-20 border-4 border-white/30 rounded-full transform-gpu animate-ring-rotate"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* 3D Profile Avatar */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-white to-gray-400 p-1 animate-3d-rotate hover:animate-3d-wobble transition-all duration-300 shadow-3d">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden group transform-gpu">
                <span className="text-5xl font-bold text-white">SK</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          </div>

          {/* Main Content with 3D Effects */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight animate-fade-in-up delay-200">
            <span className="block text-white animate-text-3d">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent animate-gradient-3d animate-fade-in-right delay-300">
              Sameer Krishn
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light animate-fade-in-up delay-400 text-shadow-3d">
            AI/ML Engineer
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-500">
          Building smart solutions with machine learning, deep learning, and real-world data. Passionate about solving complex problems through code and creativity.
          </p>

          {/* 3D Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up delay-600">
            <a
              href="https://github.com/sam-2707"
              className="p-4 bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700 transition-all duration-300 group hover:scale-110 hover:shadow-3d transform-gpu animate-social-float"
            >
              <Github size={28} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="www.linkedin.com/in/sameer-krishn"
              className="p-4 bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-600 transition-all duration-300 group hover:scale-110 hover:shadow-3d transform-gpu animate-social-float"
              style={{ animationDelay: '0.2s' }}
            >
              <Linkedin size={28} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="mailto:krishnsameer54@gmail.com"
              className="p-4 bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500 transition-all duration-300 group hover:scale-110 hover:shadow-3d transform-gpu animate-social-float"
              style={{ animationDelay: '0.4s' }}
            >
              <Mail size={28} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>

          {/* 3D CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up delay-700">
            <button
              onClick={scrollToAbout}
              className="px-10 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-3d relative overflow-hidden group animate-button-3d"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Sparkles size={18} className="group-hover:animate-spin" />
                <span>Explore My Work</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-10 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-xl hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-3d relative overflow-hidden group animate-button-3d">
              <span className="relative z-10">Download CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* 3D Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-3d-bounce hover:text-gray-300 transition-colors duration-300"
          >
            <ArrowDown size={28} className="text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;