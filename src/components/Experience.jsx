import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { experiences } from '../data/experienceData'
import { fadeUp, slideLeft, staggerContainer, viewportOnce } from '../utils/animations'

// ─── Experience ───────────────────────────────────────────────────────────────

function ExperienceCard({ exp, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      variants={fadeUp}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-1">
        <div
          className="w-4 h-4 rounded-full border-2 border-bg2 shadow-[0_0_15px_currentColor] flex-shrink-0"
          style={{ backgroundColor: exp.color, color: exp.color }}
        />
        {index < experiences.length - 1 && (
          <div className="w-px flex-1 min-h-[40px] mt-2 bg-gradient-to-b from-white/10 to-transparent" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-12">
        <motion.div
          whileHover={{ y: -3 }}
          className="glass rounded-2xl p-6 border border-white/6 hover:border-white/12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <span
                className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded-lg mb-2"
                style={{ background: `${exp.color}20`, color: exp.color, border: `1px solid ${exp.color}30` }}
              >
                {exp.type}
              </span>
              <h3 className="font-display font-bold text-lg text-white/90">{exp.role}</h3>
              <p className="font-semibold text-sm" style={{ color: exp.color }}>{exp.company}</p>
            </div>
            <div className="flex flex-col gap-1 text-xs text-white/30 font-mono sm:text-right">
              <span className="flex items-center gap-1 sm:justify-end"><Calendar size={11} />{exp.period}</span>
              <span className="flex items-center gap-1 sm:justify-end"><MapPin size={11} />{exp.location}</span>
            </div>
          </div>

          {/* Bullet points */}
          <ul className="space-y-2 mb-4">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-white/40 text-sm leading-relaxed">
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: exp.color }} />
                {h}
              </li>
            ))}
          </ul>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map(t => (
              <span key={t} className="px-2.5 py-1 rounded-lg bg-white/4 border border-white/6 text-white/40 text-xs font-mono">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-32 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">// experience</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white/90 mb-4">
            Work History
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="md:pl-4"
        >
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
