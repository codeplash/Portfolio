/* ============================================================
   Abhishek Pawar — Portfolio JavaScript
   ============================================================ */

/* ============================================================
   ✏️  ADD / EDIT YOUR PROJECTS HERE
   ============================================================
   To add a new project when you finish it:
   1. Copy one of the blocks below
   2. Paste it before the closing ]
   3. Fill in the details
   4. Add your Vercel URL to "live:" — leave "" if not deployed yet

   tagType options:
     "feat"  → gold "Featured" badge
     ""      → grey badge (write any label in "tag")
   ============================================================ */
const PROJECTS = [
  {
    num: "01",
    tag: "Featured",
    tagType: "feat",
    title: "SkillYatra",
    desc: "A full-stack EdTech platform where students learn, track progress, and interact with instructors globally — built with the MERN stack and real-time Redux state management.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind"],
    github: "https://github.com/abhishekpawar",
    live: "",   // 👈 e.g. "https://skillyatra.vercel.app"
  },
  {
    num: "02",
    tag: "AI Project",
    tagType: "",
    title: "AI-Powered ATS",
    desc: "An intelligent Applicant Tracking System that parses resumes, scores them against job descriptions, and generates AI-driven improvement feedback using Groq LLM API.",
    stack: ["Python", "Streamlit", "Groq API", "Supabase"],
    github: "https://github.com/abhishekpawar",
    live: "",   // 👈 e.g. "https://ats.streamlit.app"
  },
  {
    num: "03",
    tag: "Frontend",
    tagType: "",
    title: "Frontend E-Commerce",
    desc: "A modern, responsive shopping cart app with dynamic product browsing, cart management, quantity controls, and real-time totals — powered by Redux for seamless state handling.",
    stack: ["React", "Redux", "Tailwind CSS"],
    github: "https://github.com/abhishekpawar",
    live: "",   // 👈 e.g. "https://shop.vercel.app"
  },

  /* ── PASTE NEW PROJECTS BELOW THIS LINE ──
  {
    num: "04",
    tag: "Full Stack",
    tagType: "",
    title: "Your New Project",
    desc: "Describe what it does in 2–3 sentences.",
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/abhishekpawar/your-repo",
    live: "https://your-project.vercel.app",
  },
  */
];

/* ── Render Project Cards ── */
function renderProjects() {
  const grid = document.getElementById('projGrid');
  grid.innerHTML = PROJECTS.map(p => `
    <div class="pc r">
      <div class="pc-top">
        <span class="pc-num">${p.num}</span>
        <span class="pc-tag ${p.tagType}">${p.tag}</span>
      </div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="pc-stack">
        ${p.stack.map(s => `<span class="st">${s}</span>`).join('')}
      </div>
      <div class="pc-links">
        ${p.github ? `<a href="${p.github}" target="_blank" class="pc-lnk">GitHub &rarr;</a>` : ''}
        ${p.live   ? `<a href="${p.live}"   target="_blank" class="pc-lnk live">Live Demo</a>` : ''}
      </div>
    </div>
  `).join('');

  // Observe new cards for reveal animation
  grid.querySelectorAll('.r').forEach(el => observer.observe(el));

  // Cursor hover on new cards
  grid.querySelectorAll('.pc, a').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('lh'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('lh'));
  });
}

/* ── Dark / Light Mode Toggle ── */
const html    = document.documentElement;
const themeBtn = document.getElementById('themeBtn');

// Restore saved preference
html.setAttribute('data-theme', localStorage.getItem('theme') || 'light');

themeBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ── Custom Cursor ── */
const dot  = document.getElementById('cdot');
const ring = document.getElementById('cring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function loop() {
  dot.style.left  = mx + 'px';
  dot.style.top   = my + 'px';
  rx += (mx - rx) * 0.11;
  ry += (my - ry) * 0.11;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(loop);
})();

// Enlarge cursor on interactive elements
document.querySelectorAll('a, button, .ach-c, .ec, .vitem').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('lh'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('lh'));
});

/* ── Scroll Reveal ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.r').forEach(el => observer.observe(el));

/* ── Hero Parallax ── */
window.addEventListener('scroll', () => {
  const h1 = document.querySelector('.hero-h1');
  if (h1) h1.style.transform = `translateY(${window.scrollY * 0.05}px)`;
});

/* ── Init ── */
renderProjects();
