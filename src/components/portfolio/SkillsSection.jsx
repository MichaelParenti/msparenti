import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#00e5ff',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'],
  },
  {
    category: 'Backend & Server',
    color: '#0066ff',
    skills: ['PHP', 'Linux', 'Apache', 'Node.js', 'REST APIs', 'MySQL', 'Git'],
  },
  {
    category: 'Tools & More',
    color: '#9900ff',
    skills: ['VS Code', 'GitHub Pages', 'WordPress', 'IP Devices', 'CLI', 'Bash', 'Vite'],
  },
];

function SkillChip({ name, color, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay }}
      className="inline-flex items-center font-mono text-xs px-3 py-1.5 rounded cursor-default transition-all duration-200"
      style={{
        background: `${color}12`,
        border: `1px solid ${color}30`,
        color: color,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${color}25`;
        e.currentTarget.style.boxShadow = `0 0 12px ${color}40`;
        e.currentTarget.style.borderColor = `${color}80`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = `${color}12`;
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = `${color}30`;
      }}
    >
      {name}
    </motion.span>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32" style={{ background: '#0a0a0a' }}>
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at left center, rgba(0,102,255,0.05) 0%, transparent 60%)'
      }} />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#00e5ff' }}>
            // 02. skills
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My <span style={{ background: 'linear-gradient(135deg, #00e5ff, #9900ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Toolkit</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="p-6 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-6 rounded-full" style={{ background: group.color, boxShadow: `0 0 10px ${group.color}80` }} />
                <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                  {group.category}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <SkillChip
                    key={skill}
                    name={skill}
                    color={group.color}
                    delay={gi * 0.1 + si * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Always learning */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <span className="font-mono text-xs text-muted-foreground tracking-widest">
            + always learning new technologies
            <span className="animate-pulse ml-1" style={{ color: '#00e5ff' }}>_</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}