import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="grid grid-cols-3 gap-0.5">
            {['#ff2d2d','#ff8c00','#ffd700','#00d26a','#0080ff','#f0f0f0','#ff2d2d','#00d26a','#ffd700'].map((c, i) => (
              <div key={i} className="w-2 h-2 rounded-sm transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: c, boxShadow: `0 0 4px ${c}60` }} />
            ))}
          </div>
          <span className="font-mono text-sm font-bold text-white tracking-widest uppercase">
            <span style={{ color: '#00e5ff' }}>&lt;</span>Dev<span style={{ color: '#00e5ff' }}>/&gt;</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-cyan transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#00e5ff' }} />
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-widest px-4 py-2 border rounded transition-all duration-200"
            style={{ borderColor: '#00e5ff', color: '#00e5ff' }}
            onMouseEnter={e => { e.target.style.backgroundColor = 'rgba(0,229,255,0.1)'; e.target.style.boxShadow = '0 0 15px rgba(0,229,255,0.3)'; }}
            onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.boxShadow = 'none'; }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}