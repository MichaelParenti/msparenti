import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Timer, Code2, Globe, Cpu } from 'lucide-react';

const facts = [
  { icon: Code2, label: 'Years Coding', value: '8+' },
  { icon: Globe, label: 'Sites Launched', value: '10+' },
  { icon: Timer, label: 'Best 3x3 Solve', value: 'sub-5s' },
  { icon: Cpu, label: 'Tech Stack', value: '10+' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden" style={{ background: '#080808' }}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none" style={{
        background: 'radial-gradient(ellipse at right center, rgba(0,229,255,0.04) 0%, transparent 60%)'
      }} />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#00e5ff' }}>
            // 01. about
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">
            Who I <span style={{ background: 'linear-gradient(135deg, #00e5ff, #0066ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p className="text-lg text-white/90">
              I'm a passionate full-stack web developer who loves turning ideas into 
              fast, clean, and purposeful digital experiences.
            </p>
            <p>
              My stack spans the full spectrum — from semantic HTML and hand-crafted CSS to 
              dynamic JavaScript and React frontends, all the way to PHP backends and Linux server 
              administration. I'm never done learning; every project teaches me something new.
            </p>
            <p>
              Outside the editor, I'm a <span className="text-white font-medium">speedcuber</span> — I solve Rubik's cubes competitively with a personal best under 5 seconds.
            </p>
            <p>
              Whether it's a church website, a community platform, or a complex web app — I approach 
              every project with the same drive: make it fast, make it accessible, make it <em className="text-white not-italic font-medium">right</em>.
            </p>

            {/* Cube decoration */}
            <div className="flex gap-1 pt-2">
              {['#ff2d2d','#ff8c00','#ffd700','#00d26a','#0080ff','#f0f0f0'].map((c, i) => (
                <div key={i} className="w-5 h-5 rounded-sm" style={{ backgroundColor: c, boxShadow: `0 0 8px ${c}60` }} />
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="p-6 rounded-lg relative overflow-hidden group cursor-default"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.3)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0,229,255,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <f.icon size={18} className="mb-3" style={{ color: '#00e5ff' }} />
                <div className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {f.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono">{f.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}