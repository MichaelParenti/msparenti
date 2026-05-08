import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layout, Server, Smartphone, RefreshCw, Search, Wrench } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive UIs built with HTML, CSS, JavaScript, and React. Fast-loading, accessible, and beautiful on every screen.',
    color: '#00e5ff',
  },
  {
    icon: Server,
    title: 'Backend & PHP',
    description: 'Server-side logic, REST APIs, database integration with MySQL, and Linux hosting setup. Reliable, secure, and scalable.',
    color: '#0066ff',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first designs that look and feel great on phones, tablets, and desktops. No compromises on any device.',
    color: '#9900ff',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesigns',
    description: 'Breathing new life into outdated sites. Modern design, improved performance, and better user experience — without losing what works.',
    color: '#00d26a',
  },
  {
    icon: Search,
    title: 'Performance & SEO',
    description: 'Speed optimization, semantic markup, and SEO best practices to help your site rank and load faster.',
    color: '#ffd700',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing updates, bug fixes, content changes, and technical support. I keep your site healthy so you can focus on your mission.',
    color: '#ff8c00',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-32" style={{ background: '#0a0a0a' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at right bottom, rgba(153,0,255,0.05) 0%, transparent 60%)'
      }} />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#00e5ff' }}>
            // 04. services
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            What I <span style={{ background: 'linear-gradient(135deg, #9900ff, #0066ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Offer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-6 rounded-xl group cursor-default relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.3s ease' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${service.color}40`;
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = `0 15px 40px ${service.color}15`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)` }} />

              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}>
                <service.icon size={18} style={{ color: service.color }} />
              </div>

              <h3 className="text-white font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}