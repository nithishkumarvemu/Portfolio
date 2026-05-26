import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X, Zap } from 'lucide-react'
import { projects, projectCategories } from '../data/projectsData'
import { fadeUp, scaleUp, staggerContainer, viewportOnce } from '../utils/animations'

// ─── Projects ─────────────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="text-4xl mb-3">{project.icon}</div>
            <h3 className="font-display font-black text-2xl text-white/90 mb-1">{project.title}</h3>
            <p className="text-white/40 text-sm">{project.tagline}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl glass border border-white/8 text-white/40 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        <div className="neon-line mb-6" />

        {/* Sections */}
        <div className="space-y-6 text-sm">
          <div>
            <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-2">Overview</p>
            <p className="text-white/50 leading-relaxed">{project.description}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Problem Solved</p>
            <p className="text-white/50 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-2">Impact</p>
            <p className="text-white/50 leading-relaxed flex items-start gap-2">
              <Zap size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />{project.impact}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(t => (
                <span key={t} className="px-3 py-1 rounded-lg bg-violet-500/15 border border-violet-500/25 text-violet-300 text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-8">
          <a href={project.github} target="_blank" rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl glass border border-white/10 text-white/60 hover:text-white text-sm font-semibold transition-colors">
            <Github size={15} /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-shadow">
            <ExternalLink size={15} /> Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      variants={fadeUp}
      layout
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      onClick={() => onOpen(project)}
      className="glass rounded-2xl overflow-hidden border border-white/6 hover:border-white/12 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-pointer group"
    >
      {/* Card header gradient */}
      <div className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(circle at 50% 50%, ${project.accentColor}40, transparent 70%)` }}
        />
        <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
        {project.featured && (
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/10 backdrop-blur-sm border border-white/15 text-white/70 uppercase tracking-widest">
            Featured
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-display font-bold text-base text-white/85 mb-1 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-white/30 text-xs mb-3 leading-relaxed line-clamp-2">{project.tagline}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map(t => (
            <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/35 bg-white/4 border border-white/6">
              {t}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/25">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 pt-3 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors"
          >
            <Github size={12} /> Code
          </a>
          <span className="w-px h-3 bg-white/10" />
          <button className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors ml-auto">
            View Details →
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter))

  return (
    <section id="projects" className="relative z-10 py-32 px-6 bg-bg2/50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">// projects</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white/90 mb-4">
            What I've Built
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {projectCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]'
                  : 'glass border border-white/8 text-white/40 hover:text-white hover:border-violet-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
