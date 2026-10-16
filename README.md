<div align="center">

<!-- ANIMATED HEADER -->
<img src="https://capsule-render.vercel.app/api?type=venom&color=0:6366f1,50:a855f7,100:f43f5e&height=250&section=header&text=SkillPass%20AI&fontSize=80&fontColor=fff&fontAlignY=45&desc=Turn%20GitHub%20into%20your%20Developer%20Identity&descAlignY=65&descSize=20&animation=fadeIn" width="100%"/>

<br/>

<!-- TYPING ANIMATION -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=22&pause=1000&color=A855F7&center=true&vCenter=true&width=600&lines=AI-Powered+GitHub+Skill+Analyzer+%F0%9F%A4%96;Smart+Resume+Generator+%F0%9F%93%84;Developer+Score+Engine+%E2%9A%A1;PDF+Export+in+One+Click+%F0%9F%8E%AF" alt="Typing SVG"/>

<br/><br/>

<!-- TECH BADGES -->
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Router](https://img.shields.io/badge/React_Router_v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![jsPDF](https://img.shields.io/badge/jsPDF-FF0000?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)

<br/>

<!-- REPO LIVE BADGES -->
![Stars](https://img.shields.io/github/stars/akankshad1712/skillpass-ai?style=for-the-badge&logo=starship&color=f59e0b&labelColor=1a1a2e)
![Forks](https://img.shields.io/github/forks/akankshad1712/skillpass-ai?style=for-the-badge&logo=git&color=6366f1&labelColor=1a1a2e)
![Issues](https://img.shields.io/github/issues/akankshad1712/skillpass-ai?style=for-the-badge&logo=github&color=f43f5e&labelColor=1a1a2e)
![Last Commit](https://img.shields.io/github/last-commit/akankshad1712/skillpass-ai?style=for-the-badge&logo=githubactions&color=22c55e&labelColor=1a1a2e)
![License](https://img.shields.io/badge/MIT-License-00D4AA?style=for-the-badge&logo=opensourceinitiative&logoColor=white&labelColor=1a1a2e)

<br/><br/>

[![Live Demo](https://img.shields.io/badge/⚡_Live_Demo-Visit_Now-6366f1?style=for-the-badge)](https://skillpass-ai.web.app)
[![Star This](https://img.shields.io/badge/⭐_Star_This_Repo-Support_Us-f59e0b?style=for-the-badge)](https://github.com/akankshad1712/skillpass-ai)
[![Report Bug](https://img.shields.io/badge/🐛_Report_Bug-Open_Issue-f43f5e?style=for-the-badge)](https://github.com/akankshad1712/skillpass-ai/issues)

</div>

---

<div align="center">

## 🧠 What is SkillPass AI?

</div>

```
  ┌─────────────────────────────────────────────────────────────────┐
  │                                                                 │
  │   Enter a GitHub username  →  SkillPass AI scans all repos     │
  │   Detects skills + scores  →  Generates AI feedback            │
  │   Builds a resume          →  Export as polished PDF           │
  │                                                                 │
  │   All in under 5 seconds. Zero setup. Just a username.         │
  │                                                                 │
  └─────────────────────────────────────────────────────────────────┘
```

---

## ✨ Features

<div align="center">

|  | Feature | What it does |
|--|---------|-------------|
| 🔍 | **GitHub Auto-Scan** | Fetches all public repos instantly via GitHub REST API |
| 🧬 | **AI Skill Detection** | Detects Java · Python · AI · Web · TypeScript from repo data |
| 🏆 | **Smart Score Engine** | Stars × 2 + Forks × 3, capped at 100 — your dev rank |
| 💬 | **Feedback Engine** | Personalized AI tips to level up your skill profile |
| 📝 | **Resume Generator** | Auto-builds a role-ready resume from your GitHub data |
| 📄 | **PDF Export** | One-click download via jsPDF — clean, professional output |
| 🔥 | **Firebase Backend** | Auth + Firestore for profile persistence |
| ⚡ | **React Router v7** | Blazing fast SPA with dynamic `/user/:username` routes |

</div>

---

## 🏗️ Architecture & Data Flow

```
╔══════════════════════════════════════════════════════════════╗
║                    SKILLPASS AI  PIPELINE                    ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  [ User Input ]  ──▶  GitHub REST API  ──▶  Repo Array      ║
║                                                  │           ║
║                          ┌───────────────────────┤           ║
║                          ▼                       ▼           ║
║                    Skill Analyzer          Score Engine      ║
║                    (name matching)         (⭐×2 + 🍴×3)    ║
║                          │                       │           ║
║                          └──────────┬────────────┘           ║
║                                     ▼                        ║
║                              Feedback Engine                 ║
║                          (AI-style suggestions)              ║
║                                     │                        ║
║                                     ▼                        ║
║                            Resume Builder  ──▶  jsPDF        ║
║                                                   │           ║
║                                                   ▼           ║
║                                          📥 username.pdf     ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

**Project Structure:**

```
skillpass-ai/
├── 📁 public/
│   └── index.html
├── 📁 src/
│   ├── 🧭 App.tsx          →  Root layout + React Router
│   ├── 🏠 Home.tsx         →  Username input & analysis trigger
│   ├── 👤 Profile.tsx      →  AI dashboard + resume + PDF export
│   └── 📁 firebase/
│       └── ⚙️  config.ts   →  Auth & Firestore setup
├── package.json
└── tsconfig.json
```

---

## ⚡ Quick Start

### 1 · Clone

```bash
git clone https://github.com/akankshad1712/skillpass-ai.git
cd skillpass-ai
npm install
```

### 2 · Configure Firebase

Edit `src/firebase/config.ts`:

```ts
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "your-project.firebaseapp.com",
  projectId:         "your-project-id",
  storageBucket:     "your-project.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
```

> 🔗 Get from [Firebase Console](https://console.firebase.google.com) → Project Settings → Your Apps

### 3 · Run

```bash
npm start
# → http://localhost:3000
```

---

## 🚀 Deploy

<details>
<summary><b>🔥 Firebase Hosting</b></summary>

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```
</details>

<details>
<summary><b>▲ Vercel</b></summary>

```bash
npm install -g vercel
vercel --prod
```
</details>

<details>
<summary><b>🟢 Netlify</b></summary>

```bash
npm run build
# Drop the build/ folder at app.netlify.com/drop
```
</details>

---

## 🛠️ Tech Stack

<div align="center">

![Skills](https://skillicons.dev/icons?i=react,ts,firebase,js,html,css,git,github)

| Layer | Tech |
|-------|------|
| UI Framework | React 19 + TypeScript 4.9 |
| Routing | React Router DOM v7 |
| Backend | Firebase v12 — Auth + Firestore |
| PDF | jsPDF v4 |
| Data | GitHub REST API v3 (public, no token needed) |
| Build | Create React App · react-scripts 5 |
| Tests | React Testing Library · Jest |

</div>

---

## 🗺️ Roadmap

```
  2026 ──────────────────────────────────────────────────────────▶

  ✅ GitHub repo auto-fetch
  ✅ Skill analyzer  (Java · Python · AI · Web)
  ✅ Weighted developer score
  ✅ AI feedback generation
  ✅ Resume builder
  ✅ PDF export (jsPDF)

  🔲 GitHub OAuth login
  🔲 Real language stats via GitHub API
  🔲 Shareable profile cards
  🔲 Dark / Light theme toggle
  🔲 Contribution heatmap
  🔲 LinkedIn export
  🔲 Multi-template resumes
```

---

## 🤝 Contributing

```bash
# 1. Fork → Clone
git clone https://github.com/YOUR_USERNAME/skillpass-ai.git

# 2. Branch
git checkout -b feat/your-feature

# 3. Commit  (Conventional Commits)
git commit -m "feat: your change"

# 4. Push → PR
git push origin feat/your-feature
```

---

## 👩‍💻 About the Author

<div align="center">

<a href="https://github.com/akankshad1712">
  <img src="https://avatars.githubusercontent.com/u/146211849?v=4" width="120" style="border-radius:50%"/>
</a>

<h3>Akanksha Deshmukh</h3>
<p>📍 Pune, India &nbsp;·&nbsp; 💼 Software Engineering &nbsp;·&nbsp; 🗂️ 26 Public Repos</p>

[![GitHub Follow](https://img.shields.io/github/followers/akankshad1712?label=Follow%20%40akankshad1712&style=for-the-badge&logo=github&color=181717)](https://github.com/akankshad1712)
[![Profile Views](https://komarev.com/ghpvc/?username=akankshad1712&color=a855f7&style=for-the-badge&label=Profile+Views)](https://github.com/akankshad1712)

<br/><br/>

<!-- LIVE GITHUB STATS — auto-refresh every 24h -->
<img src="https://github-readme-stats.vercel.app/api?username=akankshad1712&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=a855f7&icon_color=6366f1&text_color=c9d1d9&include_all_commits=true&count_private=true&rank_icon=github" height="175"/>
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=akankshad1712&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=a855f7&text_color=c9d1d9&langs_count=8" height="175"/>

<br/>

<!-- STREAK COUNTER — live -->
<img src="https://github-readme-streak-stats.herokuapp.com/?user=akankshad1712&theme=tokyonight&hide_border=true&background=0d1117&ring=a855f7&fire=f43f5e&currStreakLabel=a855f7" width="60%"/>

<br/>

<!-- ACTIVITY GRAPH — live -->
<img src="https://github-readme-activity-graph.vercel.app/graph?username=akankshad1712&bg_color=0d1117&color=a855f7&line=6366f1&point=f43f5e&area=true&hide_border=true&custom_title=Contribution%20Activity" width="95%"/>

<br/>

<!-- PINNED REPO CARDS — auto-populated -->
<a href="https://github.com/akankshad1712/skillpass-ai">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=akankshad1712&repo=skillpass-ai&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=a855f7&icon_color=6366f1&text_color=c9d1d9"/>
</a>
<a href="https://github.com/akankshad1712/ANVYRA">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=akankshad1712&repo=ANVYRA&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=a855f7&icon_color=6366f1&text_color=c9d1d9"/>
</a>
<a href="https://github.com/akankshad1712/Nexora-AI">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=akankshad1712&repo=Nexora-AI&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=a855f7&icon_color=6366f1&text_color=c9d1d9"/>
</a>
<a href="https://github.com/akankshad1712/ai-trip-planner-react">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=akankshad1712&repo=ai-trip-planner-react&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=a855f7&icon_color=6366f1&text_color=c9d1d9"/>
</a>

</div>

---

## 📄 License

```
MIT License — Copyright © 2026 Akanksha Deshmukh

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction — including use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software.
```

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&color=0:6366f1,50:a855f7,100:f43f5e&height=150&section=footer&animation=fadeIn" width="100%"/>

**If SkillPass AI helped you, drop a ⭐ — it genuinely means a lot.**

<br/>

Made with ❤️ in Pune &nbsp;·&nbsp; **[Akanksha Deshmukh](https://github.com/akankshad1712)** &nbsp;·&nbsp; [⭐ Star this repo](https://github.com/akankshad1712/skillpass-ai)

</div>
