import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-gray-300 group-hover:animate-bounce" size={24} />,
      title: "Email",
      content: "krishnsameer54@gmail.com",
      link: "mailto:krishnsameer54@gmail.com"
    },
    {
      icon: <Phone className="text-gray-400 group-hover:animate-bounce" size={24} />,
      title: "Phone",
      content: "+91 7019582106",
    },
    {
      icon: <MapPin className="text-gray-500 group-hover:animate-bounce" size={24} />,
      title: "Location",
      content: "Bengaluru, Karnataka, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* 3D Icosahedrons */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-28 h-28 bg-gradient-to-br from-white/15 to-gray-400/15 transform-gpu animate-icosahedron-spin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
              clipPath: 'polygon(50% 0%, 100% 25%, 82% 75%, 18% 75%, 0% 25%)'
            }}
          />
        ))}

        {/* 3D Tetrahedrons */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`tetra-${i}`}
            className="absolute w-16 h-16 bg-gradient-to-br from-gray-300/20 to-gray-500/20 transform-gpu animate-tetrahedron-rotate"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
          />
        ))}

        {/* 3D Particle Field */}
        <div className="absolute inset-0 opacity-30">
          <div className="particle-field-3d animate-particle-field"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-3d">
              <span className="text-white">Get In</span>
              <span className="text-white"> Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to create something amazing together? Let's bring your vision to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information with 3D Effects */}
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 text-shadow-3d">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm passionate about creating immersive digital experiences and would love to 
                  discuss your next project. Whether it's 3D web development, interactive design, 
                  or cutting-edge animations, let's make it happen.
                </p>
              </div>

              {/* 3D Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-3d-large animate-contact-card-3d"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 p-4 bg-gray-900 rounded-xl group-hover:bg-gray-700/50 transition-all duration-300 group-hover:scale-110 shadow-3d transform-gpu animate-contact-icon-3d">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-shadow-3d">{info.title}</h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* 3D Social Links */}
              <div className="pt-8 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4 text-shadow-3d">Follow My Journey</h4>
                <div className="flex space-x-4">
                  {['GitHub', 'LinkedIn'].map((social, index) => (
                    <a
                      key={index}
                      href={social === 'GitHub' ? 'https://github.com/sam-2707' : 'https://www.linkedin.com/in/sameer-krishn/'}
                      className="px-6 py-3 bg-gray-800 text-gray-300 rounded-xl hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-3d animate-social-3d transform-gpu"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 3D Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 animate-fade-in-right hover:border-gray-500/30 transition-all duration-500 shadow-3d-large">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="text-gray-300 animate-message-3d" size={32} />
                <h3 className="text-3xl font-bold text-white text-shadow-3d">Send a Message</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-input-3d">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-300 hover:border-gray-600 shadow-inner-3d"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="animate-input-3d" style={{ animationDelay: '0.1s' }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-300 hover:border-gray-600 shadow-inner-3d"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="animate-input-3d" style={{ animationDelay: '0.2s' }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-300 hover:border-gray-600 shadow-inner-3d"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="animate-input-3d" style={{ animationDelay: '0.3s' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-300 resize-none hover:border-gray-600 shadow-inner-3d"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden shadow-3d-large animate-submit-3d ${
                    isSubmitted 
                      ? 'bg-gray-600 hover:bg-gray-700 shadow-3d' 
                      : 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 shadow-3d'
                  } ${isSubmitting ? 'animate-pulse' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={24} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;