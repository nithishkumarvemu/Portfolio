// ─── Skills Data ─────────────────────────────────────────────────────────────
// Edit this file to update your skills. Each skill has: name, level (0-100),
// icon (emoji or text), and category for filtering.

export const skillCategories = [
  { id: 'all',      label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend',  label: 'Backend' },
  { id: 'cloud',    label: 'Cloud & DevOps' },
  { id: 'database', label: 'Database' },
  { id: 'ai',       label: 'AI & Tools' },
]

export const skills = [
  // ── Frontend ──────────────────────────────────────────────────────────────
  { name: 'React',          level: 95, icon: '⚛',  category: 'frontend', color: '#61dafb' },
  { name: 'Next.js',        level: 88, icon: '▲',  category: 'frontend', color: '#ffffff' },
  { name: 'TypeScript',     level: 90, icon: '🔷', category: 'frontend', color: '#3178c6' },
  { name: 'JavaScript',     level: 95, icon: '🌟', category: 'frontend', color: '#f7df1e' },
  { name: 'Angular',        level: 80, icon: '🅰',  category: 'frontend', color: '#dd0031' },
  { name: 'TailwindCSS',    level: 92, icon: '💨', category: 'frontend', color: '#06b6d4' },
  { name: 'Redux',          level: 85, icon: '🔮', category: 'frontend', color: '#764abc' },
  { name: 'Framer Motion',  level: 82, icon: '✨', category: 'frontend', color: '#bb4aee' },

  // ── Backend ───────────────────────────────────────────────────────────────
  { name: 'Java',           level: 92, icon: '☕', category: 'backend', color: '#f89820' },
  { name: 'Spring Boot',    level: 90, icon: '🌱', category: 'backend', color: '#6db33f' },
  { name: 'Node.js',        level: 88, icon: '🟢', category: 'backend', color: '#339933' },
  { name: 'Express.js',     level: 85, icon: '🚂', category: 'backend', color: '#ffffff' },
  { name: 'C# / .NET',      level: 78, icon: '🔷', category: 'backend', color: '#512bd4' },
  { name: 'Python',         level: 82, icon: '🐍', category: 'backend', color: '#3776ab' },
  { name: 'C++',            level: 72, icon: '⚙',  category: 'backend', color: '#00599c' },
  { name: 'REST APIs',      level: 95, icon: '🔌', category: 'backend', color: '#7c3aed' },
  { name: 'GraphQL',        level: 78, icon: '◈',  category: 'backend', color: '#e10098' },

  // ── Cloud & DevOps ────────────────────────────────────────────────────────
  { name: 'AWS',            level: 88, icon: '☁',  category: 'cloud', color: '#ff9900' },
  { name: 'Azure',          level: 85, icon: '🔵', category: 'cloud', color: '#0078d4' },
  { name: 'GCP',            level: 78, icon: '🌐', category: 'cloud', color: '#4285f4' },
  { name: 'Docker',         level: 90, icon: '🐳', category: 'cloud', color: '#2496ed' },
  { name: 'Kubernetes',     level: 82, icon: '⎈',  category: 'cloud', color: '#326ce5' },
  { name: 'GitHub Actions', level: 88, icon: '⚙',  category: 'cloud', color: '#2088ff' },
  { name: 'CI/CD',          level: 88, icon: '🔄', category: 'cloud', color: '#06b6d4' },
  { name: 'Terraform',      level: 72, icon: '🏗',  category: 'cloud', color: '#7b42bc' },

  // ── Database ──────────────────────────────────────────────────────────────
  { name: 'PostgreSQL',     level: 92, icon: '🐘', category: 'database', color: '#336791' },
  { name: 'MySQL',          level: 90, icon: '🐬', category: 'database', color: '#4479a1' },
  { name: 'MongoDB',        level: 85, icon: '🍃', category: 'database', color: '#47a248' },
  { name: 'SQL Server',     level: 88, icon: '🗄',  category: 'database', color: '#cc2927' },
  { name: 'Redis',          level: 80, icon: '🔴', category: 'database', color: '#dc382d' },

  // ── AI & Tools ────────────────────────────────────────────────────────────
  { name: 'OpenAI API',     level: 85, icon: '🤖', category: 'ai', color: '#412991' },
  { name: 'Claude API',     level: 82, icon: '🧠', category: 'ai', color: '#7c3aed' },
  { name: 'LangChain',      level: 75, icon: '🔗', category: 'ai', color: '#1c3c3c' },
  { name: 'Postman',        level: 92, icon: '📬', category: 'ai', color: '#ff6c37' },
  { name: 'Git',            level: 95, icon: '🌿', category: 'ai', color: '#f05032' },
  { name: 'Linux',          level: 85, icon: '🐧', category: 'ai', color: '#fcc624' },
  { name: 'Grafana',        level: 85, icon: '📊', category: 'ai', color: '#f46800' },
  { name: 'Kafka',          level: 78, icon: '📨', category: 'ai', color: '#231f20' },
]
