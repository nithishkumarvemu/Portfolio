🚀 How to run in VS Code
bash# 1. Unzip and open
unzip nithish-portfolio.zip
cd portfolio
code .

# 2. Install dependencies (one time)
npm install

# 3. Start dev server
npm run dev
# → opens at http://localhost:5173

📁 Full folder structure
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              ← entry point
    ├── App.jsx               ← assembles all sections
    ├── index.css             ← Tailwind + global utilities
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx          ← typing animation, profile frame, CTA buttons
    │   ├── About.jsx         ← cards + animated stat counters
    │   ├── Skills.jsx        ← filterable skill cards with progress bars
    │   ├── Experience.jsx    ← animated timeline
    │   ├── Projects.jsx      ← filter tabs + modal detail view
    │   ├── CertsAndEducation.jsx
    │   ├── Contact.jsx       ← form + social links
    │   ├── Footer.jsx
    │   ├── Chatbot.jsx       ← intent-based AI chatbot
    │   ├── ParticleBackground.jsx
    │   ├── LoadingScreen.jsx
    │   ├── CustomCursor.jsx
    │   └── ScrollProgress.jsx
    │
    ├── data/                 ← ✏️ Edit your content here
    │   ├── skillsData.js
    │   ├── projectsData.js
    │   ├── experienceData.js
    │   └── chatbotData.js
    │
    └── utils/
        ├── animations.js     ← reusable Framer Motion variants
        └── chatbotEngine.js  ← intent matching logic
