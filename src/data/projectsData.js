// ─── Projects Data ────────────────────────────────────────────────────────────
// Edit this file to add/remove/update your projects.

export const projectCategories = [
  { id: 'all',       label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'ai',        label: 'AI / ML' },
  { id: 'cloud',     label: 'Cloud' },
  { id: 'react',     label: 'React' },
  { id: 'java',      label: 'Java' },
]

export const projects = [
  {
    id: 1,
    title: 'AI Resume Builder',
    tagline: 'Craft ATS-optimized resumes with GPT-4 intelligence',
    description:
      'An intelligent SaaS platform that uses OpenAI GPT-4 to generate ATS-optimized resumes tailored to specific job descriptions. Users paste a job posting and their experience — the AI crafts a targeted, keyword-rich resume in seconds.',
    problem: 'Job seekers spend hours tailoring resumes for each application, often missing key ATS keywords.',
    impact: 'Reduced resume tailoring time by 90%. 500+ beta users with 4.8/5 satisfaction score.',
    gradient: 'from-violet-900/60 to-cyan-900/40',
    accentColor: '#a78bfa',
    icon: '🤖',
    tags: ['React', 'OpenAI API', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Docker'],
    categories: ['fullstack', 'ai', 'react'],
    github: 'https://github.com/nithishvemu',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Cloud Monitoring Platform',
    tagline: 'Real-time infrastructure observability at scale',
    description:
      'A full-stack observability platform that aggregates metrics from AWS, Azure, and GCP into a unified dashboard. Features real-time alerting, custom SLO tracking, anomaly detection, and incident management workflows.',
    problem: 'Teams managing multi-cloud infrastructure lack unified visibility, leading to delayed incident response.',
    impact: 'Reduced MTTR by 45%. Monitors 200+ cloud resources in real time with sub-second latency.',
    gradient: 'from-blue-900/60 to-cyan-900/40',
    accentColor: '#67e8f9',
    icon: '☁',
    tags: ['React', 'TypeScript', 'Java', 'Spring Boot', 'AWS', 'Grafana', 'Kafka', 'PostgreSQL'],
    categories: ['fullstack', 'cloud', 'java'],
    github: 'https://github.com/nithishvemu',
    demo: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Full Stack SaaS Dashboard',
    tagline: 'Multi-tenant analytics platform with role-based access',
    description:
      'A production-grade multi-tenant SaaS dashboard with organization management, role-based access control, real-time analytics, subscription billing via Stripe, and a pixel-perfect design system built with Tailwind.',
    problem: 'Businesses needed a scalable, customizable analytics portal without vendor lock-in.',
    impact: 'Deployed to 3 enterprise clients. Handles 10K+ daily active users with <200ms response times.',
    gradient: 'from-purple-900/60 to-pink-900/40',
    accentColor: '#e879f9',
    icon: '📊',
    tags: ['React', 'Next.js', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
    categories: ['fullstack', 'react', 'java'],
    github: 'https://github.com/nithishvemu',
    demo: '#',
    featured: true,
  },
  {
  id: 4,
  title: 'Vehicle Management System',
  tagline: 'Smart fleet tracking and vehicle maintenance platform',
  description:
    'Developed a full-stack vehicle management platform for tracking fleet operations, service schedules, fuel usage, driver activity, and maintenance records. The system provides real-time monitoring dashboards, automated alerts, and analytics for efficient transportation management.',

  problem:
    'Organizations faced difficulties managing vehicle maintenance schedules, tracking fuel consumption, and monitoring fleet performance manually.',

  impact:
    'Improved operational efficiency by automating vehicle tracking, reducing maintenance delays, and centralizing fleet analytics into a single dashboard.',

  gradient: 'from-emerald-900/60 to-cyan-900/40',
  accentColor: '#34d399',
  icon: '🚗',

  tags: [
    'React',
    'Spring Boot',
    'Node.js',
    'MySQL',
    'REST API',
    'AWS'
  ],

  categories: ['fullstack', 'enterprise', 'react'],

  github: 'https://github.com/nithishkumarvemu/VehicleManagementSystem',

  demo: '#',

  featured: true,
}
,
  {
    id: 5,
    title: 'Revenue Lifecycle Automation',
    tagline: 'Enterprise billing & revenue tracking at scale',
    description:
      'End-to-end revenue lifecycle management platform automating customer onboarding, subscription billing, dunning workflows, and revenue recognition. Microservices architecture deployed on Kubernetes with event-driven processing via Kafka.',
    problem: 'Finance teams manually tracked revenue across disparate systems causing reconciliation errors.',
    impact: 'Eliminated 40 hours/month of manual work. Processes $2M+ monthly transactions with 99.99% accuracy.',
    gradient: 'from-orange-900/60 to-yellow-900/40',
    accentColor: '#fbbf24',
    icon: '💰',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Kubernetes', 'Kafka', 'Docker', 'AWS'],
    categories: ['fullstack', 'java', 'cloud'],
    github: 'https://github.com/nithishvemu',
    demo: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Real-time Chat Application',
    tagline: 'Slack-like messaging with end-to-end encryption',
    description:
      'A high-performance real-time messaging platform with WebSocket-based communication, end-to-end encryption, file sharing, threaded conversations, and presence indicators. Horizontally scalable with Redis pub/sub for multi-instance support.',
    problem: 'Teams needed a self-hosted, privacy-first alternative to commercial messaging platforms.',
    impact: 'Supports 1,000+ concurrent connections. Sub-50ms message delivery. Zero-knowledge architecture.',
    gradient: 'from-indigo-900/60 to-violet-900/40',
    accentColor: '#818cf8',
    icon: '💬',
    tags: ['React', 'Node.js', 'WebSockets', 'Redis', 'MongoDB', 'Docker', 'TypeScript'],
    categories: ['fullstack', 'react'],
    github: 'https://github.com/nithishvemu',
    demo: '#',
    featured: false,
  },
]
