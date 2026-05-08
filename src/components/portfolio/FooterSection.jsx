import { motion } from 'framer-motion';

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-10 border-t" style={{ background: '#050505', borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-3 gap-0.5">
            {['#ff2d2d','#ff8c00','#ffd700','#00d26a','#0080ff','#f0f0f0','#ff2d2d','#00d26a','#ffd700'].map((c, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: c, opacity: 0.6 }} />
            ))}
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            <span style={{ color: '#00e5ff' }}>&lt;</span>Dev<span style={{ color: '#00e5ff' }}>/&gt;</span>
          </span>
        </div>

        <p className="font-mono text-xs text-muted-foreground text-center">
          © {year} · Built with React · Deployed on GitHub Pages
        </p>

        <div className="flex items-center gap-1">
          {['#ff2d2d','#ff8c00','#ffd700','#00d26a','#0080ff','#f0f0f0'].map((c, i) => (
            <div key={i} className="w-2 h-2 rounded-sm" style={{ backgroundColor: c, opacity: 0.4 }} />
          ))}
        </div>
      </div>
    </footer>
  );
}