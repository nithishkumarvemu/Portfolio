import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/5 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
            <span className="font-display font-black text-xs text-white">N</span>
          </div>
          <span className="font-display font-bold text-sm text-white/30">
            Nithish Kumar Vemu
          </span>
        </div>

        <p className="text-white/20 text-xs flex items-center gap-1">
          Built with <Heart size={10} className="text-violet-400" /> in {year}
        </p>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {[
            { href: 'https://github.com/nithishvemu', icon: <Github size={14} /> },
            { href: 'https://linkedin.com/in/nithishkumarvemu', icon: <Linkedin size={14} /> },
            { href: 'mailto:nithishvemu0@gmail.com', icon: <Mail size={14} /> },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg glass border border-white/6 flex items-center justify-center text-white/25 hover:text-white hover:border-violet-500/30 transition-all duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
