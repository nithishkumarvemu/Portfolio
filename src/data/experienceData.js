// ─── Experience Data ──────────────────────────────────────────────────────────
// Edit roles, companies, dates and bullet points here.

export const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Benda Infotech',
    location: 'Remote — USA',
    period: 'Jul 2025 — Present',
    type: 'Full-time',
    color: '#7c3aed',
    highlights: [
      'Supporting highly available cloud-native microservices across Azure & GCP with 99.9%+ uptime SLAs',
      'Built and maintain CI/CD pipelines using GitHub Actions & Azure DevOps, cutting release failures by 40%',
      'Production monitoring via Grafana, Azure Monitor, Application Insights — tracking latency, availability, and infrastructure health',
      'Optimized PostgreSQL queries and indexes, reducing API response times by 35% under peak load',
      'Implemented Docker-based containerization strategies improving environment parity across dev/staging/prod',
      'Authored runbooks, incident response procedures, and post-mortem documentation for production support teams',
    ],
    tech: ['Azure', 'GCP', 'Docker', 'PostgreSQL', 'Grafana', 'GitHub Actions', 'Java', 'React'],
  },
  {
    id: 2,
    role: 'Software Engineering Intern',
    company: 'Benda Infotech',
    location: 'Remote — USA',
    period: 'Jul 2024 — Dec 2024',
    type: 'Internship',
    color: '#06b6d4',
    highlights: [
      'Developed and tested RESTful APIs in Node.js, improving system reliability and cutting error rates',
      'Collaborated with senior engineers to enhance React front-end modules — boosted user engagement by 20%',
      'Implemented automated unit and E2E tests with Jest & Cypress — reduced bug incidence by 30%',
      'Deployed containerized healthcare applications using Docker and AWS with high availability configuration',
      'Documented technical workflows and API specifications, accelerating knowledge transfer across teams',
    ],
    tech: ['Node.js', 'React', 'Jest', 'Cypress', 'Docker', 'AWS', 'Java'],
  },
  {
    id: 3,
    role: 'Full Stack Developer',
    company: '[24]7.ai',
    location: 'Hyderabad, India',
    period: 'Aug 2023 — Dec 2023',
    type: 'Full-time',
    color: '#a855f7',
    highlights: [
      'Monitored and maintained production applications on Azure App Service — achieved 99.9% system availability',
      'Diagnosed and resolved production incidents using Azure monitoring tools and structured log analysis',
      'Collaborated with cross-functional teams on incident response, release deployments, and production troubleshooting',
      'Improved application performance by optimizing backend services and critical API integrations',
    ],
    tech: ['Azure', 'Java', 'Spring Boot', 'REST APIs', 'SQL', 'TypeScript'],
  },
  {
    id: 4,
    role: 'Web Developer',
    company: 'BAIF Research Development Foundation',
    location: 'Hyderabad, India',
    period: 'Aug 2022 — Jul 2023',
    type: 'Full-time',
    color: '#22d3ee',
    highlights: [
      'Redesigned the organization\'s website using React and Java Full Stack, significantly strengthening digital presence',
      'Built a reusable component library, reducing future development time by 40%',
      'Integrated UI with backend REST APIs for real-time donor and event updates, eliminating manual processes',
      'Enhanced mobile performance by 45% through lazy loading, asset bundling, and responsive layout optimization',
    ],
    tech: ['React', 'Java', 'REST APIs', 'MySQL', 'JavaScript', 'CSS3'],
  },
  {
    id: 5,
    role: 'Software Development Intern',
    company: 'PR Software Training Institute',
    location: 'Hyderabad, India',
    period: 'Nov 2021 — Feb 2022',
    type: 'Internship',
    color: '#34d399',
    highlights: [
      'Built a Library Management System automating check-in/out workflows, improving operational efficiency by 25%',
      'Designed secure user authentication flows and optimized SQL queries, improving responsiveness by 20%',
      'Created deployment guides and technical documentation, cutting new developer onboarding time by 30%',
    ],
    tech: ['Java', 'SQL', 'Authentication', 'REST APIs'],
  },
]

export const stats = [
  { label: 'Years Experience', value: 4, suffix: '+' },
  { label: 'Projects Shipped', value: 15, suffix: '+' },
  { label: 'Technologies', value: 35, suffix: '+' },
  { label: 'Certifications', value: 4, suffix: '' },
]
