'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLenis } from '../hooks/useLenis';

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);

  // Initialize Lenis smooth scrolling
  useLenis();

  const projects = [
    {
      title: "Eiraplaza",
      url: "https://eiraplaza.com/",
      description: "Modern restaurant website for Eira Plaza in Helsinki with online ordering, multilingual support, and comprehensive menu management.",
      tech: ["Next.js", "React", "Clerk Auth", "TailwindCSS", "Internationalization"],
      category: "Restaurant Platform"
    },
    {
      title: "Enhancivity",
      url: "https://enhancivity.com/",
      description: "A comprehensive business enhancement platform focusing on productivity optimization and strategic growth solutions.",
      tech: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      category: "Business Platform"
    },
    {
      title: "Wattura",
      url: "https://wattura.vercel.app/",
      description: "Dutch sustainable energy solutions platform offering EV charging, solar panels, and smart energy systems.",
      tech: ["Next.js", "React", "TailwindCSS", "SEO Optimization"],
      category: "Energy Solutions"
    },
    {
      title: "Signature Park",
      url: "https://signaturepark.co/",
      description: "Professional UX/UI design agency with 350+ global clients and 650+ completed projects.",
      tech: ["Next.js", "Design Systems", "Performance Optimization", "Analytics"],
      category: "Design Agency"
    },
    {
      title: "Synteqs",
      url: "https://www.synteqs.com/",
      description: "Advanced time series analytics platform for industrial data optimization and predictive maintenance.",
      tech: ["Next.js", "Data Analytics", "Machine Learning", "Industrial IoT"],
      category: "Data Analytics"
    },
    {
      title: "Timeless Ticket Tales",
      url: "https://timeless-ticket-tales.map-india.org/",
      description: "Interactive mobile-exclusive narrative experience with immersive storytelling and rich visual design.",
      tech: ["Next.js", "Mobile-First Design", "Interactive Storytelling", "Visual Arts"],
      category: "Interactive Experience"
    }
  ];

  const skillCategories = [
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "NestJS", "GraphQL"],
      icon: "🔧"
    },
    {
      category: "Frontend Development",
      skills: ["React.js", "Next.js", "TypeScript", "TailwindCSS"],
      icon: "🎨"
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
      icon: "🗄️"
    },
    {
      category: "Cloud & Deployment",
      skills: ["AWS", "Heroku", "Vercel", "DigitalOcean"],
      icon: "☁️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-72 h-72 sm:w-80 sm:h-80 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/30">
                <Image
                  src="/jonaed.png"
                  alt="Md Jonaed Hasan"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Md Jonaed Hasan
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Full-Stack Web Developer with 7+ years of experience crafting scalable solutions using Node.js, React.js, and modern web technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white rounded-full font-semibold transition-all duration-300"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              I'm a passionate full-stack web developer with 7+ years of experience building scalable applications.
              I specialize in Node.js, React.js, Next.js, and PostgreSQL, creating innovative solutions across diverse
              industries including energy, design, analytics, and interactive media.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-white font-bold text-lg">{category.category}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              A showcase of my recent work spanning various industries and technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 cursor-pointer border border-slate-700/50"
                onClick={() => setActiveProject(index)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-blue-400 text-sm font-medium">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Professional Experience</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              7+ years of building innovative web solutions for companies worldwide
            </p>
          </div>

          <div className="space-y-8">
            {/* REDQ Technologies */}
            <div className="bg-slate-700/30 rounded-2xl p-8 border border-slate-600/30">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Full Stack Web Developer</h3>
                  <p className="text-blue-400 text-lg font-semibold mb-2">REDQ Technologies LTD, Dhaka</p>
                  <p className="text-slate-400">April 2024 - November 2024</p>
                </div>
              </div>
              <ul className="text-slate-300 space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Developed full-stack applications using Node.js, React.js, and PostgreSQL with dynamic content management systems
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Built an AI-based social media posting platform with advanced automation features
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Optimized legacy codebase, achieving 30% performance improvement
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Led a team of 3 developers to build a next-generation marketing tool
                </li>
              </ul>
            </div>

            {/* Ingenjörsautomation AB */}
            <div className="bg-slate-700/30 rounded-2xl p-8 border border-slate-600/30">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Full Stack Web Developer</h3>
                  <p className="text-blue-400 text-lg font-semibold mb-2">Ingenjörsautomation AB, Sweden</p>
                  <p className="text-slate-400">October 2021 - April 2024</p>
                </div>
              </div>
              <ul className="text-slate-300 space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Developed scalable full-stack applications with Node.js, React.js, and PostgreSQL
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Implemented modern development workflows using Git and GitHub for team collaboration
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Optimized web applications for performance, scalability, and security using AJAX and RESTful APIs
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Built RESTful API and GraphQL endpoints using Node.js, Express, and GraphQL-yoga
                </li>
              </ul>
            </div>

            {/* Code Eating Ants */}
            <div className="bg-slate-700/30 rounded-2xl p-8 border border-slate-600/30">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Junior Frontend Web Developer</h3>
                  <p className="text-blue-400 text-lg font-semibold mb-2">Code Eating Ants, Dhaka</p>
                  <p className="text-slate-400">June 2018 - November 2020</p>
                </div>
              </div>
              <ul className="text-slate-300 space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Designed and maintained multiple websites using HTML, CSS, JavaScript, and jQuery
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Developed interactive web page prototypes for rapid functionality demonstration
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Optimized existing web pages for enhanced performance and user experience
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Created comprehensive technical documentation for web development projects
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Me */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why Choose Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Fast Delivery</h3>
                <p className="text-slate-300">Quick turnaround times without compromising on quality. Your project will be delivered on schedule.</p>
              </div>

              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quality Assured</h3>
                <p className="text-slate-300">Rigorous testing and code review processes ensure robust, scalable, and maintainable solutions.</p>
              </div>

              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Great Communication</h3>
                <p className="text-slate-300">Regular updates, clear documentation, and responsive communication throughout the project lifecycle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with cutting-edge technology and exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:jonaed.workspace@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>

            <a
              href="https://github.com/jonaed1230"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:bg-white/10 text-white rounded-full font-semibold transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/jonaed1230"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:bg-white/10 text-white rounded-full font-semibold transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            <a
              href="tel:+8801797890918"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:bg-white/10 text-white rounded-full font-semibold transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900/80 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Md Jonaed Hasan.
          </p>
        </div>
      </footer>
    </div>
  );
}
