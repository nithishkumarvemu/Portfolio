// ─── Chatbot Knowledge Base ───────────────────────────────────────────────────
// This is the structured knowledge base for the intent-based chatbot engine.
// Add/edit answers here without touching chatbotEngine.js.

export const PROFILE = {
  name: 'Nithish Kumar Vemu',
  email: 'nithishvemu0@gmail.com',
  location: 'United States',
  linkedin: 'linkedin.com/in/nithishkumarvemu',
  github: 'github.com/nithishvemu',
  available: true,
  title: 'Full Stack Engineer',
  summary: 'Full Stack Engineer with 4+ years building scalable cloud-native systems, microservices, and AI-powered applications across AWS, Azure, and GCP.',
}

// ── Intents with keyword triggers and multiple answer variants ─────────────────
export const intents = [
  {
    id: 'greeting',
    triggers: ['hi', 'hello', 'hey', 'yo', 'sup', 'good morning', 'good afternoon', 'howdy', 'greetings'],
    answers: [
      "Hey! 👋 I'm Nithish's AI assistant. Ask me anything about his skills, projects, experience, or how to get in touch. What would you like to explore?",
      "Hi there! Great to meet you. I know everything about Nithish — his tech stack, projects, experience and more. What's on your mind?",
      "Hello! I'm here to walk you through Nithish's portfolio. Whether you want to know about his tech skills, projects, or background — fire away! 🚀",
    ],
  },
  {
    id: 'frontend',
    triggers: ['frontend', 'front end', 'react', 'next.js', 'nextjs', 'angular', 'typescript', 'javascript', 'ui', 'tailwind', 'redux', 'framer', 'css', 'html'],
    answers: [
      "Nithish's frontend game is strong 💪 He works primarily in **React** and **Next.js** with **TypeScript**, and has built everything from complex SaaS dashboards to real-time chat UIs. He uses **TailwindCSS** for styling, **Redux** for state management, **Framer Motion** for animations, and also knows **Angular**. His React skills sit at ~95% proficiency with 4+ years of production experience.",
      "On the frontend, Nithish specializes in **React (95%)**, **TypeScript (90%)**, and **Next.js (88%)**. He's also proficient in Angular, and is fluent in TailwindCSS, Redux, and Framer Motion for advanced UI/UX work. He's built multi-tenant SaaS dashboards and AI-powered apps with polished, production-grade interfaces.",
      "Frontend is one of Nithish's core strengths. He's shipped production React/TypeScript apps at Benda Infotech, improving user engagement by 20% through enhanced UI modules. Key skills: React, Next.js, Angular, TypeScript, JavaScript, TailwindCSS, Redux, and Framer Motion animations.",
    ],
  },
  {
    id: 'backend',
    triggers: ['backend', 'back end', 'java', 'spring', 'spring boot', 'node', 'node.js', 'express', 'api', 'apis', 'rest', 'graphql', 'microservices', 'python', 'c#', '.net', 'dotnet', 'server', 'server-side'],
    answers: [
      "Nithish is a serious backend engineer. His primary stack is **Java + Spring Boot** (90%) for enterprise microservices, and **Node.js + Express.js** (88%) for lightweight APIs. He also works in **Python**, **C# / .NET**, and **C++**. He designs RESTful APIs and GraphQL schemas, and has implemented microservices architectures on Kubernetes handling high-volume production traffic.",
      "Backend is where Nithish really shines. He has 4+ years with **Java Spring Boot** — building scalable microservices, REST APIs, and batch processing systems. At Benda Infotech he optimized PostgreSQL queries cutting response times by **35%**. He also builds in Node.js, Python, and C# depending on the project requirements.",
      "Nithish's backend toolkit: **Java** (92%), **Spring Boot** (90%), **Node.js** (88%), **Express.js** (85%), **Python** (82%), **C# .NET** (78%). He's built healthcare APIs, revenue lifecycle platforms, and cloud monitoring backends — all production-grade with proper testing (Jest, Cypress, JUnit) and CI/CD.",
    ],
  },
  {
    id: 'cloud',
    triggers: ['cloud', 'aws', 'azure', 'gcp', 'google cloud', 'docker', 'kubernetes', 'k8s', 'devops', 'ci/cd', 'github actions', 'terraform', 'container', 'deployment', 'infrastructure', 'sre', 'observability', 'monitoring'],
    answers: [
      "Cloud & DevOps is a core competency for Nithish. He works daily with **AWS**, **Azure**, and **GCP**, and manages infrastructure with **Docker + Kubernetes**. At Benda Infotech he built CI/CD pipelines with **GitHub Actions + Azure DevOps** that reduced release failures by 40%, and monitors production systems using **Grafana, Azure Monitor, and Application Insights**.",
      "Nithish holds an **AWS Cloud Practitioner** certification and has hands-on production experience across all three major clouds. His DevOps toolkit: Docker, Kubernetes, GitHub Actions, Terraform, CI/CD pipelines. He's achieved 99.9%+ uptime SLAs managing cloud-native microservices and written runbooks for incident response.",
      "Strong cloud profile here! Nithish operates multi-cloud (AWS/Azure/GCP) microservices architectures with containerization via Docker/Kubernetes. He's built deployment automation, rollback procedures, SLO monitoring, and uses Grafana + Splunk for observability. He reduced API response times by 35% through infrastructure and query optimization.",
    ],
  },
  {
    id: 'database',
    triggers: ['database', 'sql', 'postgres', 'postgresql', 'mysql', 'mongodb', 'mongo', 'redis', 'nosql', 'sql server', 'data', 'query', 'queries'],
    answers: [
      "Nithish is fluent across relational and NoSQL databases. Primary: **PostgreSQL** (92%) and **MySQL** (90%) for transactional systems. He's optimized complex queries that reduced API response times by 35% in production. For NoSQL he uses **MongoDB** for flexible schemas and **Redis** for caching and pub/sub messaging.",
      "Database skills: **PostgreSQL**, **MySQL**, **MongoDB**, **SQL Server**, and **Redis**. He designs normalized schemas, writes optimized queries with proper indexing, and handles database migrations safely in CI/CD pipelines. At Benda Infotech he specifically tuned PostgreSQL under high-load production traffic.",
    ],
  },
  {
    id: 'ai_tools',
    triggers: ['ai', 'openai', 'gpt', 'claude', 'langchain', 'llm', 'machine learning', 'artificial intelligence', 'chatgpt', 'anthropic'],
    answers: [
      "Nithish actively builds with AI APIs! He has hands-on experience with the **OpenAI API** (GPT-4), **Claude API** (Anthropic), and **LangChain** for chained LLM workflows. He's built an AI Resume Builder that uses GPT-4 to generate ATS-optimized resumes, and an AI Interview Assistant powered by Claude. He integrates AI into full-stack products, not just experiments.",
      "AI integrations are a growing specialty for Nithish. He's worked with **OpenAI GPT-4**, **Claude API**, and **LangChain** — building production AI features like intelligent resume generation, mock interview platforms, and context-aware chatbots (like the one you're talking to right now! 😄).",
    ],
  },
  {
    id: 'projects',
    triggers: ['project', 'projects', 'built', 'build', 'portfolio', 'work', 'apps', 'application', 'what have you', 'show me', 'demo'],
    answers: [
      "Here are Nithish's standout projects:\n\n🤖 **AI Resume Builder** — GPT-4 powered, ATS-optimized resume generation (React, OpenAI, Node.js, PostgreSQL)\n\n☁ **Cloud Monitoring Platform** — Multi-cloud observability dashboard, 200+ resources monitored in real time (React, Java, Kafka, AWS)\n\n📊 **Full Stack SaaS Dashboard** — Multi-tenant analytics with Stripe billing, 10K+ DAU (Next.js, Java Spring Boot, PostgreSQL)\n\n🎯 **AI Interview Assistant** — Claude-powered mock interviews with real-time feedback (React, Claude API, WebSockets)\n\n💰 **Revenue Lifecycle Platform** — Enterprise billing automation processing $2M+/month (Java, Kubernetes, Kafka)\n\nWant details on any specific project?",
      "Nithish has built 6 major projects in his portfolio:\n\n1. **AI Resume Builder** — SaaS with GPT-4, 500+ beta users\n2. **Cloud Monitoring Platform** — Real-time multi-cloud observability\n3. **Full Stack SaaS Dashboard** — Multi-tenant, deployed to 3 enterprise clients\n4. **AI Interview Assistant** — Used by 300+ candidates\n5. **Revenue Lifecycle Automation** — Processes $2M+/month\n6. **Real-time Chat App** — 1000+ concurrent connections, E2E encrypted\n\nScroll up to the Projects section for full details, live demos, and GitHub links!",
    ],
  },
  {
    id: 'experience',
    triggers: ['experience', 'work history', 'career', 'job', 'worked', 'companies', 'employment', 'roles', 'positions', 'where have you worked'],
    answers: [
      "Nithish has 4+ years of professional experience:\n\n🟣 **Benda Infotech** — Full Stack Developer (Jul 2025–Present) | Remote USA\n🔵 **Benda Infotech** — Software Engineering Intern (Jul–Dec 2024) | Remote USA\n🟤 **[24]7.ai** — Full Stack Developer (Aug–Dec 2023) | Hyderabad\n🟢 **BAIF Research Foundation** — Web Developer (Aug 2022–Jul 2023) | Hyderabad\n🟡 **PR Software Training** — Dev Intern (Nov 2021–Feb 2022) | Hyderabad\n\nCurrently at Benda Infotech maintaining 99.9%+ uptime on Azure/GCP microservices.",
      "Career highlights:\n\n• Currently a **Full Stack Developer at Benda Infotech** — building cloud-native microservices on Azure/GCP, cutting API response times by 35%\n• Interned at Benda Infotech — boosted user engagement 20%, reduced bugs 30% with automated testing\n• At **[24]7.ai** — achieved 99.9% Azure production availability\n• At **BAIF Foundation** — reduced dev time 40% with reusable component library\n\nTotal: 4+ years, 5 companies, across India and the US.",
    ],
  },
  {
    id: 'education',
    triggers: ['education', 'degree', 'university', 'college', 'study', 'gpa', 'masters', 'master', 'ms', 'school', 'academic', 'graduate', 'graduation'],
    answers: [
      "Nithish's academic background:\n\n🎓 **M.S. Computer & Information Science** — Northwest Missouri State University (GPA: **3.87/4.00**, May 2025)\nCoursework: Distributed Systems, Cloud Computing, Database Systems, ML, Software Engineering\n\n🏛 **B.E. Mechanical Engineering** — Vignan Institute of Technology & Science (GPA: 3.00/4.00, 2022)\nHis engineering background gives him a unique edge in understanding complex systems and technical constraints.",
      "Nithish holds a **Master's in Computer & Information Science** from Northwest Missouri State University with a stellar **3.87 GPA** (May 2025). His undergrad was Mechanical Engineering, which gives him an interesting systems-thinking perspective that he brings to software architecture.",
    ],
  },
  {
    id: 'certifications',
    triggers: ['certification', 'certifications', 'certified', 'certificate', 'aws cert', 'credential', 'credential'],
    answers: [
      "Nithish's certifications:\n\n☁ **AWS Cloud Practitioner Essentials** — Amazon Web Services (2025)\n🤖 **Software Development with Amazon Q Developer** — AWS (2025)\n📡 **Postman API Fundamentals Student Expert** — Postman (2024)\n📱 **Build Apps with Flutter** — Google (2025)\n\nHe's actively expanding his cloud and AI certifications.",
    ],
  },
  {
    id: 'contact',
    triggers: ['contact', 'email', 'reach', 'hire', 'hiring', 'available', 'availability', 'open to work', 'opportunity', 'opportunities', 'connect', 'linkedin', 'github', 'get in touch'],
    answers: [
      "Nithish is **actively open to new opportunities!** 🟢\n\n📧 **Email:** nithishvemu0@gmail.com\n💼 **LinkedIn:** linkedin.com/in/nithishkumarvemu\n⌬ **GitHub:** github.com/nithishvemu\n\nHe's particularly interested in roles involving Full Stack Engineering, Cloud/SRE, or AI-integrated applications. Best way to reach him is email or LinkedIn!",
      "Great timing — Nithish is **available for new roles**! He's looking for Full Stack, Cloud, or AI Engineering positions.\n\n✉ nithishvemu0@gmail.com\n💼 linkedin.com/in/nithishkumarvemu\n\nFeel free to reach out — he typically responds within 24 hours.",
    ],
  },
  {
    id: 'summary',
    triggers: ['who is', 'tell me about', 'about nithish', 'about you', 'introduce', 'overview', 'summary', 'background', 'profile'],
    answers: [
      "Nithish Kumar Vemu is a **Full Stack Engineer** based in the United States with 4+ years of experience building scalable, cloud-native applications.\n\n🔧 **Core Stack:** React/TypeScript + Java Spring Boot + Node.js\n☁ **Cloud:** AWS, Azure, GCP | Docker, Kubernetes\n🗄 **Data:** PostgreSQL, MongoDB, Redis\n🤖 **AI:** OpenAI, Claude API, LangChain\n\nHe's currently at Benda Infotech maintaining production microservices at 99.9%+ uptime. His MS in CS (GPA 3.87) from Northwest Missouri State rounds out a strong technical foundation.",
    ],
  },
  {
    id: 'resume',
    triggers: ['resume', 'cv', 'download', 'pdf', 'document'],
    answers: [
      "You can download Nithish's resume directly from the **Contact section** below — there's a download button right there. For the most up-to-date version, you can also email him at nithishvemu0@gmail.com and he'll send it over promptly! 📄",
    ],
  },
]

// ── Suggested prompts shown in chatbot ─────────────────────────────────────────
export const suggestedPrompts = [
  "What's his tech stack?",
  "Tell me about his projects",
  "Cloud & DevOps experience?",
  "Backend skills?",
  "Is he available to hire?",
  "AI integrations he's built?",
]

// ── Fallback responses when no intent matches ─────────────────────────────────
export const fallbacks = [
  "I'm not sure I caught that, but I know everything about Nithish! Try asking about his **skills**, **projects**, **experience**, **education**, or **how to contact him**.",
  "Hmm, that's outside my knowledge base! I'm specialized in Nithish's portfolio. Ask me about his tech stack, work experience, projects, or availability. 😊",
  "I didn't quite get that one. I can answer questions about Nithish's frontend/backend skills, cloud experience, AI projects, education, or contact info — just ask!",
]
