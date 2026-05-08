import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Multiply Movement Hub',
    url: 'https://multiply-movement-hub.example.com/',
    description: 'A modern web application built to power a community movement. Features a clean, responsive UI with dynamic content management.',
    tags: ['React', 'Full-Stack', 'Web App'],
    color: '#00e5ff',
  },
  {
    title: 'Chicago Central District (CCDNAZ)',
    url: 'https://ccdnaz.org',
    description: 'Church district website with event listings, church finder, and donation integration. Clean, professional design serving a wide audience.',
    tags: ['HTML', 'CSS', 'JS', 'WordPress'],
    color: '#0066ff',
  },
  {
    title: 'Gainesville TLC',
    url: 'https://gainesvilletlc.org',
    description: "Total Life Church's community website. Bold hero sections, mobile-first design, and congregation-focused features.",
    tags: ['HTML', 'CSS', 'Responsive'],
    color: '#9900ff',
  },
  {
    title: 'Michael Parenti Archive',
    url: 'https://michaelparenti.github.io/michael-parenti',
    description: 'A GitHub Pages-hosted archive and tribute site for Michael Parenti. Static, fast, and built for longevity with clean semantic markup.',
    tags: ['HTML', 'CSS', 'GitHub Pages'],
    color: '#00d26a',
  },
  {
    title: 'QuizStuff',
    url: 'https://quizstuff.org',
    description: 'An e-commerce platform for purchasing equipment and accessing digital software products. Clean shopping experience with product management.',
    tags: ['JavaScript', 'PHP', 'MySQL'],
    color: '#ffd700',
  },
  {
    title: 'Lombard Church',
    url: 'https://lombardchurch.org',
    description: 'Full church website with ministry pages and congregation-focused features. Built for accessibility and ease of use.',
    tags: ['HTML', 'CSS', 'JS', 'CMS'],
    color: '#ff8c00',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group block rounded-xl overflow-hidden relative cursor-pointer"
      style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${project.color}50`;
        e.currentTarget.style.boxShadow = `0 0 30px ${project.color}20`;
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      style2={{ transition: 'all 0.3s ease' }}
    >
      {/* Color bar top */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      {/* Hover glow bg */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${project.color}08 0%, transparent 60%)` }} />

      <div className="p-6 relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <Globe size={18} style={{ color: project.color, marginTop: 2 }} />
          <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-lg mb-2 leading-tight group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 rounded"
              style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}25` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="relative py-32" style={{ background: '#080808' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.03) 0%, transparent 70%)'
      }} />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#00e5ff' }}>
            // 03. work
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Selected <span style={{ background: 'linear-gradient(135deg, #00e5ff, #0066ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}