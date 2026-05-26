import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'
import { staggerContainer, fadeUp } from '../utils/animations'

// ─── Hero ─────────────────────────────────────────────────────────────────────
// Full-viewport hero with profile photo, typing animation, CTA buttons.

// Edit the rotating titles here:
const TITLES = [
  'Full Stack Engineer',
  'React & TypeScript Dev',
  'Java Spring Boot Dev',
  'Cloud & SRE Engineer',
  'AI Integration Builder',
  'Node.js API Architect',
]

// Profile image — replace with your own base64 or URL
const PROFILE_IMAGE = "/profile.png" // Set to a URL string to use an image

function TypingText() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = TITLES[titleIdx]
    let timer

    if (!deleting) {
      if (displayed.length < target.length) {
        timer = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
      } else {
        timer = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      } else {
        setDeleting(false)
        setTitleIdx(i => (i + 1) % TITLES.length)
      }
    }
    return () => clearTimeout(timer)
  }, [displayed, deleting, titleIdx])

  return (
    <span className="grad-text-2 font-display font-bold">
      {displayed}
      <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 align-middle animate-pulse" />
    </span>
  )
}

function ProfileFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mb-10 w-fit"
    >
      {/* Outer spinning ring */}
      <div className="absolute inset-[-10px] rounded-full border-2 border-transparent border-t-violet-500 border-b-cyan-500 animate-spin" style={{ animationDuration: '4s' }} />
      {/* Inner spinning ring */}
      <div className="absolute inset-[-20px] rounded-full border border-transparent border-l-violet-500/40 border-r-cyan-500/40 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />

      {/* Glow halo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/30 to-cyan-500/30 blur-2xl scale-110" />

      {/* Avatar */}
      <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_60px_rgba(124,58,237,0.4)]">
        {PROFILE_IMAGE ? (
          <img src={PROFILE_IMAGE} alt="Nithish Kumar Vemu" className="w-full h-full object-cover object-top" />
        ) : (
          // Placeholder initials avatar
          <div className="w-full h-full bg-gradient-to-br from-violet-800 to-cyan-800 flex items-center justify-center">
            <span className="font-display font-black text-5xl text-white/90">N</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const scrollToAbout = () => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden"
    >
      {/* Background radials */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(124,58,237,0.12)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(6,182,212,0.07)_0%,transparent_60%)]" />

      <motion.div
        variants={staggerContainer(0.12, 0.4)}
        initial="hidden"
        animate="visible"
        className="relative max-w-3xl mx-auto"
      >
        <ProfileFrame />

        {/* Eyebrow tag */}
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet-500/20 text-xs font-mono text-violet-300 tracking-widest uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="font-display font-black text-5xl sm:text-5xl md:text-6xl leading-none tracking-tight mb-4"
        >
           <span className="grad-text">
              Nithish Kumar Vemu
            </span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div variants={fadeUp} className="text-xl sm:text-2xl mb-6 min-h-[2rem]">
          <TypingText />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-white/40 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10 font-light"
        >
          Building modern full-stack applications, AI-powered solutions, and scalable cloud-native systems 
          with cutting-edge technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center mb-10">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
          </button>
          <a
            href="mailto:nithishvemu0@gmail.com"
            className="px-6 py-3 rounded-xl glass border border-white/10 text-white/80 font-semibold text-sm hover:border-violet-500/50 hover:text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Mail size={15} /> Contact Me
          </a>
          <a
            href="#"
            onClick={e => { e.preventDefault(); alert('Contact nithishvemu0@gmail.com for the latest resume!') }}
            className="px-6 py-3 rounded-xl glass border border-white/10 text-white/80 font-semibold text-sm hover:border-cyan-500/50 hover:text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Download size={15} /> Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={fadeUp} className="flex gap-4 justify-center">
          {[
            { href: 'https://linkedin.com/in/nithishkumarvemu', icon: <Linkedin size={18} />, label: 'LinkedIn' },
            { href: 'https://github.com/nithishvemu', icon: <Github size={18} />, label: 'GitHub' },
            { href: 'mailto:nithishvemu0@gmail.com', icon: <Mail size={18} />, label: 'Email' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-xl glass border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
