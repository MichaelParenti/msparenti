import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = `Hi, my name is ${name} (${email}).\n\n${message}`;
    const mailtoLink = `mailto:MSParentiJr@gmail.com?subject=${encodeURIComponent(subject || 'Project Inquiry')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const inputClass = `w-full bg-transparent font-mono text-sm text-white placeholder-muted-foreground px-4 py-3 rounded-lg outline-none transition-all duration-200`;
  const inputStyle = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' };

  const onFocus = e => {
    e.currentTarget.style.borderColor = 'rgba(0,229,255,0.5)';
    e.currentTarget.style.boxShadow = '0 0 15px rgba(0,229,255,0.1)';
  };
  const onBlur = e => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <section id="contact" className="relative py-32" style={{ background: '#080808' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center bottom, rgba(0,229,255,0.05) 0%, transparent 60%)'
      }} />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#00e5ff' }}>
            // 05. contact
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let's <span style={{ background: 'linear-gradient(135deg, #00e5ff, #0066ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project in mind? Looking for a developer? Fill out the form and I'll get back to you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Ready to build something?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's a new site from scratch, a redesign, or ongoing support — I'm available for 
                freelance projects. Let's talk about what you need.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:MSParentiJr@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.2)' }}>
                  <Mail size={16} style={{ color: '#00e5ff' }} />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-0.5">Email</div>
                  <div className="text-white text-sm group-hover:text-[#00e5ff] transition-colors">MSParentiJr@gmail.com</div>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com/MichaelParenti' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/msparenti' },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs px-4 py-2.5 rounded-lg text-muted-foreground hover:text-white transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <social.icon size={14} />
                  {social.label}
                  <ExternalLink size={10} />
                </a>
              ))}
            </div>

            {/* Cube accent */}
            <div className="pt-4">
              <div className="grid grid-cols-6 gap-1 w-fit opacity-30">
                {Array.from({ length: 18 }, (_, i) => {
                  const colors = ['#ff2d2d','#ff8c00','#ffd700','#00d26a','#0080ff','#f0f0f0'];
                  return <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors[i % 6] }} />;
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2 block">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClass}
                    style={inputStyle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={inputClass}
                    style={inputStyle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2 block">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry, question, etc."
                  className={inputClass}
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>

              <div>
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className={inputClass}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 font-mono text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300"
                style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid #00e5ff', color: '#00e5ff' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0,229,255,0.2)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,229,255,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(0,229,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Send size={14} />
                Send Message
              </button>

              <p className="font-mono text-xs text-muted-foreground text-center">
                Opens your email client to send the message
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}