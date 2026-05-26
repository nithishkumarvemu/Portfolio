import { motion } from 'framer-motion'
import { Award, BookOpen, Star } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations'

// ─── Certifications ───────────────────────────────────────────────────────────

const certs = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    year: '2025',
    icon: '☁',
    color: '#ff9900',
    desc: 'Foundational knowledge of AWS cloud concepts, services, security, and cost optimization.',
  },
  {
    title: 'Software Development with Amazon Q Developer',
    issuer: 'Amazon Web Services',
    year: '2025',
    icon: '🤖',
    color: '#7c3aed',
    desc: 'AI-powered code generation, debugging, and productivity acceleration using Amazon Q.',
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    year: '2024',
    icon: '📡',
    color: '#ff6c37',
    desc: 'Expert-level API design, testing, automation, and collaboration workflows in Postman.',
  },
  {
    title: 'Build Apps with Flutter',
    issuer: 'Google',
    year: '2025',
    icon: '📱',
    color: '#4285f4',
    desc: 'Cross-platform mobile development with Flutter and Dart, including Firebase integration.',
  },
]

// ─── Education ────────────────────────────────────────────────────────────────

const education = [
  {
    degree: 'M.S. Computer & Information Science',
    school: 'Northwest Missouri State University',
    location: 'Maryville, MO',
    period: 'May 2025',
    gpa: '3.87 / 4.00',
    color: '#7c3aed',
    icon: '🎓',
    courses: ['Distributed Systems', 'Cloud Computing', 'Database Systems', 'Software Engineering', 'Machine Learning', 'Algorithms & Complexity'],
  },
  {
    degree: 'B.E. Mechanical Engineering',
    school: 'Vignan Institute of Technology & Science',
    location: 'Telangana, India',
    period: 'Sep 2022',
    gpa: '3.00 / 4.00',
    color: '#06b6d4',
    icon: '🏛',
    courses: ['Engineering Design', 'Manufacturing Systems', 'Product Lifecycle Mgmt', 'CAD/CAM', 'Materials Science', 'Thermodynamics'],
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="relative z-10 py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">// certifications</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white/90 mb-4">
            Credentials
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto" />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 gap-4"
        >
          {certs.map(cert => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 border border-white/6 hover:border-white/12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg"
                  style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}30` }}
                >
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-sm text-white/80 mb-1 leading-tight">{cert.title}</h3>
                  <p className="font-semibold text-xs mb-1" style={{ color: cert.color }}>{cert.issuer}</p>
                  <p className="font-mono text-xs text-white/25 mb-3">{cert.year}</p>
                  <p className="text-white/35 text-xs leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education" className="relative z-10 py-24 pb-32 px-6 bg-bg2/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-3">// education</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white/90 mb-4">
            Academic Background
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto" />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-6"
        >
          {education.map(edu => (
            <motion.div
              key={edu.degree}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-7 border border-white/6 hover:border-white/12 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${edu.color}, transparent)` }} />

              <div className="text-3xl mb-4">{edu.icon}</div>
              <h3 className="font-display font-bold text-lg text-white/85 mb-1">{edu.degree}</h3>
              <p className="font-semibold text-sm mb-1" style={{ color: edu.color }}>{edu.school}</p>
              <p className="text-white/30 text-xs font-mono mb-3">{edu.location} · {edu.period}</p>

              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold mb-5"
                style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}25`, color: edu.color }}
              >
                <Star size={10} /> GPA: {edu.gpa}
              </div>

              <div>
                <p className="text-white/25 text-xs uppercase tracking-widest font-mono mb-2">Coursework</p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map(c => (
                    <span key={c} className="px-2 py-0.5 rounded-md bg-white/4 border border-white/6 text-white/35 text-xs">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
