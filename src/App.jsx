import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Rocket, 
  Globe, 
  Cpu, 
  Github, 
  Twitter, 
  ExternalLink, 
  Mail,
  ChevronRight,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Star,
  X,
  Layers,
  Zap
} from 'lucide-react';
import heroBg from './assets/hero-bg.png';
import projectsData from './projects.json';

const projects = projectsData;

const stats = [
  { label: "Years of Industry Exp", value: "5+", icon: <Layers className="text-blue-400" /> },
  { label: "Production Scale Apps", value: "20+", icon: <Rocket className="text-emerald-400" /> },
  { label: "Performance Score", value: "98%", icon: <Zap className="text-yellow-400" /> },
  { label: "Clean Code Standard", value: "100%", icon: <CheckCircle2 className="text-purple-400" /> }
];

const processSteps = [
  { 
    title: "Discovery", 
    desc: "Understanding your goals, target audience, and business requirements in depth.",
    icon: <Globe className="w-6 h-6" />
  },
  { 
    title: "Strategy", 
    desc: "Designing the perfect blueprint, user journey, and technical architecture.",
    icon: <Layers className="w-6 h-6" />
  },
  { 
    title: "Execution", 
    desc: "High-performance development with clean, scalable, and maintainable code.",
    icon: <Code2 className="w-6 h-6" />
  },
  { 
    title: "Launch", 
    desc: "Rigorous testing, optimization, and seamless deployment to your users.",
    icon: <Rocket className="w-6 h-6" />
  }
];



const faqs = [
  { q: "How long does a typical project take?", a: "Most projects take between 4-8 weeks depending on complexity." },
  { q: "What technologies do you specialize in?", a: "We majorly use React, Next.js, Node.js, PHP, Laravel, and modern CSS frameworks like Tailwind." },
  { q: "Do you offer post-launch support?", a: "Yes, we provide 3 months of free maintenance and support for all our projects." }
];

const services = [
  {
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    title: "Web Development",
    description: "Crafting blazing fast, high-performance web applications using MERN and Laravel stacks."
  },
  {
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    title: "UI/UX Design",
    description: "Designing intuitive and stunning user interfaces that convert."
  },
  {
    icon: <Rocket className="w-8 h-8 text-teal-400" />,
    title: "App Strategy",
    description: "From concept to deployment, I help build successful digital products."
  }
];

function App() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0c]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-card !rounded-none border-t-0 border-x-0 bg-[#0a0a0c]/80 backdrop-blur-lg">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-2xl font-black gradient-text">PORTFOLIO.</div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#projects" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Projects</a>
            <a href="#services" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Services</a>
            <a href="#process" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Process</a>
            <a href="#contact" className="btn btn-primary py-2 px-6 text-sm">Hire Me</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden menu-btn z-[110]"
            onClick={() => setIsMenuOpen(true)}
          >
            <div className="menu-line w-6" />
            <div className="menu-line w-6" />
            <div className="menu-line w-6" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="nav-backdrop"
              />
              
              {/* Sidebar */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="mobile-nav-overlay"
              >
                {/* Close Button Inside Sidebar */}
                <button 
                  className="close-btn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={24} />
                </button>

                <div className="flex flex-col gap-8 mt-10">
                  <div className="mb-8">
                    <div className="text-xl font-black gradient-text mb-2">PORTFOLIO.</div>
                    <div className="h-1 w-12 bg-primary rounded-full" />
                  </div>
                  
                  <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:pl-4 transition-all hover:text-primary">
                    Projects Case Studies
                  </a>
                  <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:pl-4 transition-all hover:text-primary">
                    Services & Skills
                  </a>
                  <a href="#process" onClick={() => setIsMenuOpen(false)} className="hover:pl-4 transition-all hover:text-primary">
                    How I Deliver
                  </a>
                  
                  <div className="mt-10 pt-10 border-t border-white/5">
                    <p className="text-xs uppercase tracking-widest text-text-muted mb-6">Let's Connect</p>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn btn-primary w-full py-4">
                      Get in Touch
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0c]/50 to-[#0a0a0c]" />
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-glow bg-primary/10 text-primary-glow font-medium text-sm mb-6">
              <Code2 size={16} /> Senior Software Engineer & Consultant
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              Enterprise Grade <br />
              <span className="gradient-text">Freelance Solutions</span>
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Leveraging my experience in high-scale corporate environments to build 
              stunning, high-performance digital products for your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#projects" className="btn btn-primary">
                Explore Case Studies <ChevronRight size={20} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Book a Consultation <MessageSquare size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#121216]/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-text-muted text-sm uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container" id="services">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Expertise</h2>
          <p className="text-text-muted">Specialized in modern web solutions</p>
        </div>
        <div className="grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group border border-transparent hover:border-primary/30"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-muted">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#0a0a0c] py-32 relative overflow-hidden" id="process">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
            >
              Workflow
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-6"
            >
              The <span className="gradient-text">Process</span>
            </motion.h2>
            <p className="text-text-muted text-xl max-w-2xl mx-auto font-medium">
              A high-end, iterative framework designed for speed, 
              quality, and scalability.
            </p>
          </div>

          <div className="relative">
            {/* Animated Progress Line */}
            <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[1px] bg-white/5 overflow-hidden">
               <motion.div 
                className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  {/* Step Connector Node (Desktop) */}
                  <div className="hidden lg:flex absolute -top-[7px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-white/10 z-20 group-hover:border-primary transition-colors">
                    <motion.div 
                      className="w-full h-full rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.2 + 0.5 }}
                    />
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-white/[0.02] border border-white/5 mb-10 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500 relative overflow-hidden">
                      {/* Animated Border */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative z-10 text-white group-hover:scale-110 transition-transform duration-500">
                        {React.cloneElement(step.icon, { size: 40, strokeWidth: 1.5 })}
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-2 block opacity-50">Step 0{i + 1}</span>
                      <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all">{step.title}</h3>
                    </div>
                    
                    <p className="text-text-muted text-sm leading-relaxed max-w-[250px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-[#0a0a0c] py-24" id="projects">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <div className="text-center md:text-left">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Portfolio</span>
              <h2 className="text-5xl md:text-6xl font-black mb-6">Expertise in <br /><span className="gradient-text">Real-World Projects</span></h2>
              <p className="text-text-muted text-lg max-w-xl">
                A selection of high-performance applications built with industry-standard 
                architectures and modern technology stacks.
              </p>
            </div>
            <a href="#" className="btn btn-outline group">
              View All Work <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="project-card group"
              >
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                  />
                  <div className="project-overlay" />
                  <div className="absolute top-6 left-6 z-20">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 2).map((t, i) => (
                        <span key={i} className="tag !bg-white/10 !text-white !border-white/20 backdrop-blur-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted mb-8 line-clamp-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                       {project.tech.slice(2).map((t, i) => (
                        <span key={i} className="text-[10px] text-text-muted uppercase tracking-tighter border border-white/5 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group/link"
                    >
                      <ExternalLink size={16} className="group-hover/link:scale-110" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="bg-[#121216]/50">
        <div className="container max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
            <p className="text-text-muted">Everything you need to know</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <span className="font-bold">{faq.q}</span>
                  <ChevronDown className={`transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-text-muted animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container py-12">
        <div className="glass-card p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Have a vision? Let's <br /><span className="gradient-text">scale it together.</span></h2>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12">
              I bring elite industry standards to every freelance project. 
              Let’s discuss how I can help your startup or business excel.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <a href="mailto:hello@example.com" className="btn btn-primary w-full md:w-auto py-5 px-10 text-lg flex items-center justify-center gap-3 shadow-lg shadow-primary/20">
                Send Project Inquiry <Mail size={22} />
              </a>
              <a href="https://wa.me/919625613008" target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full md:w-auto py-5 px-10 text-lg flex items-center justify-center gap-3">
                Direct WhatsApp <MessageSquare size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-text-muted">
        <div className="container">
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-white transition-colors"><Github /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter /></a>
            <a href="#" className="hover:text-white transition-colors"><Mail /></a>
          </div>
          <p>© 2026 Developer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
