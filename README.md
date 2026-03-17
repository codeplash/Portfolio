# Abhishek Pawar — Developer Portfolio

A clean, responsive personal portfolio website built with pure HTML, CSS, and JavaScript. Inspired by [ejosue.com](https://ejosue.com), designed to impress recruiters and showcase projects, skills, and experience.

🌐 **Live Site:** [abhishek-portfolio.vercel.app](https://abhishek-portfolio.vercel.app)

---

## ✨ Features

- 🌙 **Dark / Light Mode** — Toggle with one click, preference saved in localStorage
- 📱 **Fully Responsive** — Works perfectly on mobile, tablet, and desktop
- ⬇️ **Resume Download** — One-click PDF download from navbar and hero section
- 🎯 **Custom Cursor** — Smooth dot + ring cursor with hover animations
- 🎞️ **Scroll Animations** — Elements fade in as you scroll down
- ▲ **Live Project Links** — Vercel deployment links on each project card
- ➕ **Easy Project Management** — Add new projects by editing just the `PROJECTS` array in `main.js`
- 🔗 **All Correct Links** — LinkedIn, GitHub, Email, Phone all connected

---

## 🗂️ Project Structure

```
portfolio/
├── index.html            # Main HTML structure & content
├── style.css             # All styles, themes, dark mode, responsive
├── main.js               # Projects data, dark toggle, cursor, animations
└── ABHISHEK_RESUME.pdf   # Resume file for download
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure & semantic markup |
| CSS3 | Styling, CSS variables, dark/light themes, animations |
| Vanilla JavaScript | Interactivity, cursor, scroll reveal, project rendering |
| Google Fonts | DM Serif Display + DM Sans |
| Vercel | Hosting & deployment |

---

## 🚀 Getting Started

### Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/codeplash/abhishek-portfolio.git
   ```

2. Open the folder:
   ```bash
   cd abhishek-portfolio
   ```

3. Open `index.html` in your browser — no build step needed!

---

## ➕ How to Add a New Project

Open `main.js` and find the `PROJECTS` array. Copy and paste this block before the closing `]`:

```js
{
  num: "04",
  tag: "Full Stack",       // Badge label
  tagType: "",             // "feat" for gold badge, "" for grey
  title: "Your Project Name",
  desc: "Short description of the project in 2–3 sentences.",
  stack: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/codeplash/your-repo",
  live: "https://your-project.vercel.app",  // Leave "" if not deployed
},
```

Save the file, push to GitHub — Vercel auto-deploys! ✅

---

## 🌐 Deployment on Vercel

1. Push all files to your GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — no settings needed
5. Your live URL will be ready in ~30 seconds 🚀

> Every time you push to GitHub, Vercel automatically redeploys.

---

## 📬 Contact

| Platform | Link |
|---|---|
| 📧 Email | [abhishekspawar5147@gmail.com](mailto:abhishekspawar5147@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/abhishek-pawar-194948200](https://www.linkedin.com/in/abhishek-pawar-194948200) |
| 🐙 GitHub | [github.com/codeplash](https://github.com/codeplash) |
| 📞 Phone | +91 9975967778 |

---

## 📁 Sections

| Section | Description |
|---|---|
| Hero | Name, tagline, CTA buttons, key stats |
| Value Strip | 4 highlight cards (Fast, AI, Full-Stack, Care) |
| About | Bio, skill pills grouped by category |
| Projects | Case study cards with GitHub + Live links |
| Experience | TechSonix, Ekatta Innovators, AICTE AIML |
| Education | B.Tech TGCET + Diploma GP Jalna |
| Achievements | Silver Medal, 500+ DSA, AICTE, TechSonix |
| Contact | Email, LinkedIn, GitHub, Phone |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Designed & Built by <strong>Abhishek Pawar</strong> · Nagpur, Maharashtra 🇮🇳</p>
