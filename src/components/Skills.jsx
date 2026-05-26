import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills, skillCategories } from '../data/skillsData'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations'

// ─── Skills ───────────────────────────────────────────────────────────────────

function SkillCard({ skill, index }) {
  return (
    <motion.div
      variants={fadeUp}
      layout
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="glass rounded-2xl p-4 border border-white/6 hover:border-violet-500/30 hover:shadow-[0_12px_40px_rgba(124,58,237,0.15)] transition-colors duration-300 cursor-default group"
    >
      {/* Icon + name row */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{skill.icon}</span>
        <div>
          <div className="font-display font-bold text-sm text-white/80 group-hover:text-white transition-colors">
            {skill.name}
          </div>
          <div className="font-mono text-xs" style={{ color: skill.color }}>
            {skill.level}%
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? skills : skills.filter(s => s.category === active)

  return (
    <section id="skills" className="relative z-10 py-32 px-6 bg-bg2/50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">// skills</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white/90 mb-4">
            Tech Arsenal
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-white/35 text-sm max-w-md mx-auto">
            Technologies I build with every day, from pixel-perfect UIs to cloud-native backends.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
                active === cat.id
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]'
                  : 'glass border border-white/8 text-white/40 hover:text-white hover:border-violet-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={staggerContainer(0.04)}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
