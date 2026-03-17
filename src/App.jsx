import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Users,
  Layers,
  Zap,
  CheckCircle2,
  ChevronDown,
  Star
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

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO at TechFlow",
    text: "Working with this team was a game-changer. Our conversion rate increased by 40% after the redesign.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Chen",
    role: "Founder of Bloom",
    text: "The attention to detail and technical expertise is unmatched. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  }
];

const faqs = [
  { q: "How long does a typical project take?", a: "Most projects take between 4-8 weeks depending on complexity." },
  { q: "What technologies do you specialize in?", a: "We majorly use React, Next.js, Node.js, and modern CSS frameworks like Tailwind." },
  { q: "Do you offer post-launch support?", a: "Yes, we provide 3 months of free maintenance and support for all our projects." }
];

const services = [
  {
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    title: "Web Development",
    description: "Crafting blazing fast, SEO-friendly web applications that scale."
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

  return (
    <div className="min-h-screen bg-[#0a0a0c]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-card !rounded-none border-t-0 border-x-0 bg-[#0a0a0c]/80">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-2xl font-black gradient-text">PORTFOLIO.</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Projects</a>
            <a href="#services" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Services</a>
            <a href="#process" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Process</a>
            <a href="#contact" className="btn btn-primary py-2 px-6 text-sm">Hire Me</a>
          </div>
        </div>
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
      <section className="bg-[#0a0a0c] relative overflow-hidden" id="process">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black mb-6"
            >
              How I <span className="gradient-text">Work</span>
            </motion.h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              My proven 4-step framework for turning complex ideas into 
              successful digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 -z-10" />
            
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="glass-card p-8 h-full relative flex flex-col items-center text-center hover:bg-white/[0.08] transition-all border-white/5">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <span className="text-white">
                      {React.cloneElement(step.icon, { size: 32 })}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-6 text-4xl font-black opacity-10 group-hover:opacity-30 transition-opacity">
                    0{i + 1}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-[#121216]/50" id="projects">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
              <p className="text-text-muted">A showcase of recent digital products I've built.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold">
              View All Projects <ExternalLink size={18} />
            </a>
          </div>

          <div className="grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-text-muted mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-xs text-text-muted border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="flex items-center gap-2 font-bold hover:text-primary transition-colors">
                    View Project <ExternalLink size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Feedback</h2>
          <p className="text-text-muted">What people say about my work</p>
        </div>
        <div className="grid">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-8">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-lg italic mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} className="w-12 h-12 rounded-full border-2 border-primary" alt={t.name} />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
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

      {/* Call to Action */}
      <section id="contact" className="container text-center">
        <div className="glass-card p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8">Have a vision? Let's <br /><span className="gradient-text">scale it together.</span></h2>
            <p className="text-xl text-text-muted max-w-xl mx-auto mb-10">
              I bring elite industry standards to every freelance project. 
              Let’s discuss how I can help your startup or business excel.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:hello@example.com" className="btn btn-primary btn-lg py-5 px-12 text-lg">
                Send Project Inquiry <Mail size={24} />
              </a>
              <a href="https://wa.me/yournumber" className="btn btn-outline btn-lg py-5 px-12 text-lg">
                Direct WhatsApp <MessageSquare size={24} />
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
