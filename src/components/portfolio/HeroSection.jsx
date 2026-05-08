import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, ExternalLink } from 'lucide-react';
import CubeBackground from './CubeBackground';
import RubiksCube3D from './RubiksCube3D';

const typewriterPhrases = ['Full-Stack Developer', 'React Specialist', 'Speedcuber', 'Open Source Enthusiast', 'Problem Solver'];

import { useState, useEffect } from 'react';

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = typewriterPhrases[index];
    let timeout;
    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((index + 1) % typewriterPhrases.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="font-mono" style={{ color: '#00e5ff' }}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <CubeBackground />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="font-mono text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: '#00e5ff' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              // Hello, World
            </motion.p>

            <h1 className="text-5xl md:text-7xl font-black leading-none mb-4 tracking-tight">
              <span className="text-white">I'm a</span><br />
              <span style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #00e5ff 50%, #0066ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Web Dev</span>
            </h1>

            <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-8">
              <Typewriter />
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg mb-10 text-sm md:text-base">
              Crafting fast, modern web experiences. From pixel-perfect frontends to robust backends —
              always learning, always building.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#work"
                className="group flex items-center gap-2 px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest transition-all duration-300"
                style={{
                  background: 'rgba(0,229,255,0.1)',
                  border: '1px solid #00e5ff',
                  color: '#00e5ff',
                  borderRadius: '4px',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,229,255,0.2)'; e.currentTarget.style.boxShadow = '0 0 25px rgba(0,229,255,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,229,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                View My Work
                <ExternalLink size={14} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-5 mt-10 justify-center lg:justify-start">
              <a href="https://github.com/MichaelParenti" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-all duration-200 hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/msparenti" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-all duration-200 hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Cube */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          >
            <div className="relative">
              <div className="absolute inset-0 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)' }} />
              <RubiksCube3D size={140} />
              {/* Solve time badge */}
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-xs px-3 py-1 rounded"
                style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.3)', color: '#00e5ff' }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⏱ speedcuber
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(0,229,255,0.5)' }}>scroll</span>
        <ArrowDown size={14} style={{ color: 'rgba(0,229,255,0.5)' }} />
      </motion.div>
    </section>
  );
}