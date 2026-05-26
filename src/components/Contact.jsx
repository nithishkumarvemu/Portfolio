import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Download, Send, MapPin, CheckCircle } from 'lucide-react'
import { fadeUp, slideLeft, slideRight, viewportOnce } from '../utils/animations'

// ─── Contact ──────────────────────────────────────────────────────────────────

const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'nithishvemu0@gmail.com',
    href: 'mailto:nithishvemu0@gmail.com',
    color: '#7c3aed',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/nithishkumarvemu',
    href: 'https://linkedin.com/in/nithishkumarvemu',
    color: '#0077b5',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'github.com/nithishvemu',
    href: 'https://github.com/nithishvemu',
    color: '#ffffff',
  },
  {
    icon: <Download size={18} />,
    label: 'Resume',
    value: 'Download CV',
    href: '#',
    color: '#06b6d4',
    onClick: (e) => {
      e.preventDefault()
      alert('Contact nithishvemu0@gmail.com for the latest resume PDF!')
    },
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, wire this to EmailJS, Formspree, or a backend endpoint
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="relative z-10 py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">// contact</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white/90 mb-4">
            Let's Build Together
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-white/35 text-sm max-w-md mx-auto">
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left — info */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Availability badge */}
            <div className="flex items-center gap-2 text-sm text-green-400 font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
              Available for opportunities
            </div>

            <div className="flex items-start gap-2 text-white/30 text-sm mb-4">
              <MapPin size={14} className="mt-0.5 flex-shrink-0" />
              <span>United States (open to remote & relocation)</span>
            </div>

            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                onClick={link.onClick}
                className="flex items-center gap-4 glass rounded-xl p-4 border border-white/6 hover:border-white/14 hover:translate-x-1 transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-shadow duration-300 group-hover:shadow-lg"
                  style={{ background: `${link.color}15`, border: `1px solid ${link.color}25`, color: link.color }}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs text-white/30 font-mono uppercase tracking-wide">{link.label}</p>
                  <p className="text-sm text-white/65 group-hover:text-white transition-colors font-medium">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 border border-white/8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/6 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/6 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-1.5">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  placeholder="What's this about?"
                  className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/6 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-white/30 uppercase tracking-widest mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/6 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-shadow duration-300"
              >
                {sent ? <><CheckCircle size={16} /> Message Sent!</> : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
