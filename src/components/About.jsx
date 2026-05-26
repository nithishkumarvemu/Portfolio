import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Cloud, Database, Cpu, GitBranch, Zap } from 'lucide-react'
import { fadeUp, slideLeft, slideRight, staggerContainer, viewportOnce } from '../utils/animations'
import { stats } from '../data/experienceData'

// ─── About ────────────────────────────────────────────────────────────────────

const cards = [
  {
    icon: <Code2 size={20} />,
    title: 'Full Stack Engineering',
    text: 'React, TypeScript, Next.js on the frontend. Java Spring Boot, Node.js, and Python on the backend. End-to-end ownership of production systems.',
    color: 'from-violet-600/20 to-violet-600/5',
    border: 'border-violet-500/20',
  },
  {
    icon: <Cloud size={20} />,
    title: 'Cloud & SRE',
    text: 'AWS, Azure, GCP. Docker, Kubernetes, CI/CD pipelines. Achieving 99.9%+ uptime with Grafana monitoring, incident management, and deployment automation.',
    color: 'from-cyan-600/20 to-cyan-600/5',
    border: 'border-cyan-500/20',
  },
  {
    icon: <Cpu size={20} />,
    title: 'AI Integration',
    text: 'OpenAI GPT-4, Claude API, LangChain. Building production AI features — intelligent resume generation, mock interviews, and AI-powered workflows.',
    color: 'from-purple-600/20 to-purple-600/5',
    border: 'border-purple-500/20',
  },
  {
    icon: <Database size={20} />,
    title: 'Data Architecture',
    text: 'PostgreSQL, MongoDB, MySQL, Redis. Designing schemas, writing optimized queries, and managing high-throughput data pipelines.',
    color: 'from-emerald-600/20 to-emerald-600/5',
    border: 'border-emerald-500/20',
  },
  {
    icon: <GitBranch size={20} />,
    title: 'DevOps & Automation',
    text: 'GitHub Actions, Azure DevOps, Terraform. Building deployment pipelines that cut release failures by 40% and accelerate team velocity.',
    color: 'from-orange-600/20 to-orange-600/5',
    border: 'border-orange-500/20',
  },
  {
    icon: <Zap size={20} />,
    title: 'Performance & Scale',
    text: 'Query optimization, caching strategies, load testing. Reduced API response times by 35% in production through systematic profiling and tuning.',
    color: 'from-pink-600/20 to-pink-600/5',
    border: 'border-pink-500/20',
  },
]

function StatCounter({ value, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-black text-4xl grad-text">
        {inView ? value : 0}{suffix}
      </div>
      <div className="text-white/30 text-xs uppercase tracking-widest mt-1">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">// about</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white/90 mb-4">
            Who I Am
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto" />
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">Full Stack Engineer</p>
            <h3 className="font-display font-bold text-3xl text-white/90 mb-6 leading-tight">
              I build systems that{' '}
              <span className="grad-text">scale, perform,</span>{' '}
              and ship on time.
            </h3>
            <div className="space-y-4 text-white/45 leading-relaxed text-sm">
              <p>
                I'm a Full Stack Engineer with <strong className="text-white/70">4+ years</strong> of experience
                building scalable cloud-native applications and microservices across AWS, Azure, and GCP. I thrive at
                the intersection of elegant frontend experiences and robust backend systems.
              </p>
              <p>
                Currently at <strong className="text-white/70">Benda Infotech</strong>, I maintain 99.9%+ uptime
                on production microservices, build CI/CD pipelines that reduce release failures, and optimize
                PostgreSQL queries that cut response times by 35%.
              </p>
              <p>
                I'm especially excited about <strong className="text-white/70">AI-integrated applications</strong> —
                building real products with OpenAI, Claude API, and LangChain. My MS in Computer Science (GPA 3.87)
                from Northwest Missouri State rounds out a strong engineering foundation.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-white/5">
              {stats.map(s => (
                <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            variants={staggerContainer(0.08, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-3"
          >
            {cards.map(card => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className={`glass rounded-2xl p-4 border ${card.border} hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(124,58,237,0.15)] transition-all duration-300 cursor-default group`}
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${card.color} border ${card.border} flex items-center justify-center text-white/70 mb-3 group-hover:text-white transition-colors`}>
                  {card.icon}
                </div>
                <h4 className="font-display font-bold text-sm text-white/80 mb-2">{card.title}</h4>
                <p className="text-white/35 text-xs leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
