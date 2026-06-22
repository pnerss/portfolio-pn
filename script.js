/* ============================================
   PORTFOLIO — SCRIPT PRINCIPAL
   Auteur  : Paulo Neres
   Version : 2.0 — inspiré de DeveloperFolio
   ============================================ */

/* ─────────────────────────────────────────────
   ✏️  SECTION 1 — VOS COMPÉTENCES
   Modifiez ce tableau pour afficher vos propres
   compétences dans la section "Ce que je sais faire".

   Champs :
     name  → nom de la compétence
     level → pourcentage de maîtrise (0 à 100)
     label → niveau affiché (ex : Expert, Avancé…)
     icon  → emoji affiché sur la carte (optionnel)
   ───────────────────────────────────────────── */

const skills = [
  { name: "Adressage IP", level: 80, label: "Expert", icon: "🌐" },
  { name: "Dépannage", level: 80, label: "Avancé", icon: "🛠️" },
  { name: "Linux", level: 50, label: "Intermédiaire", icon: "🐧" },
  { name: "Cybersécurité", level: 70, label: "Intermédiaire", icon: "🔐" },
  { name: "HTML", level: 60, label: "Intermédiaire", icon: "💻" },
  { name: "Anglais", level: 65, label: "Intermédiaire", icon: "🇺🇸" },
];

/* ─────────────────────────────────────────────
   ✏️  SECTION 2 — VOS PROJETS
   Modifiez ce tableau pour afficher vos projets
   dans la section "Réalisations phares".

   Champs :
     emoji → icône affichée sur la miniature
     color → couleur de fond de la miniature (hex)
     title → titre du projet
     tags  → étiquettes (tableau de textes)
     desc  → courte description du projet
     link  → URL vers le projet (utilisez "#" si non disponible)
   ───────────────────────────────────────────── */

const projects = [
  {
    emoji: "📊",
    color: "#E6F1FB",
    title: "Projet Réseau",
    tags: ["ITop", "Linux"],
    desc: "Installation.",
    link: "#",
  },
  {
    emoji: "🇧🇷",
    color: "#EAF3DE",
    title: "Projet Développement",
    tags: ["HTML", "CSS"],
    desc: "Site créé de zéro avec HTML et CSS.",
    link: "https://bresil-projet.netlify.app",
  },
  {
    emoji: "📱",
    color: "#FAEEDA",
    title: "Onboarding IT — Capgemini",
    tags: ["Support Informatique", "Stage"],
    desc: "Accompagnement de nouveaux collaborateurs dans la configuration de leur poste de travail.",
    link: "situation-pro.html",
  },
];

/* ─────────────────────────────────────────────
   ✏️  SECTION 3 — VOS FORMATIONS COMPLÉMENTAIRES
   Modifiez ce tableau pour afficher vos certifications
   et cours suivis en dehors de votre scolarité.

   Champs :
     icon  → emoji affiché sur la carte
     title → nom de la certification / du cours
     org   → organisme (ex : Cisco, OpenClassrooms…)
     date  → période ou année d'obtention
     desc  → courte description (optionnel, peut être vide)
   ───────────────────────────────────────────── */

const certifications = [
  {
    icon: "🌐",
    title: "CCNA — Introduction to Networks",
    org: "Cisco Networking Academy",
    date: "2025",
    desc: "Bases de l'adressage IP, des protocoles réseau et de la configuration d'équipements Cisco.",
  },
  {
    icon: "🛡️",
    title: "CCNA — Switching, Routing and Wireless Essentials",
    org: "Cisco Networking Academy",
    date: "2025",
    desc: "Configuration de VLAN, routage inter-VLAN et bonnes pratiques de sécurité réseau.",
  },
  {
    icon: "💻",
    title: "Introduction to Cyber Security",
    org: "Site en ligne",
    date: "2026",
    desc: "Basic de la sécurié.",
  },
];

/* ─────────────────────────────────────────────
   RENDU — Ne pas modifier sauf si vous savez
   ce que vous faites.
   ───────────────────────────────────────────── */

/** Génère les cartes de compétences */
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  skills.forEach(({ name, level, label, icon }) => {
    const card = document.createElement("div");
    card.className = "skill-card reveal";
    card.innerHTML = `
      <div class="skill-top">
        <div class="skill-icon">${icon || "⭐"}</div>
        <div class="skill-name">${name}</div>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" data-level="${level}"></div>
      </div>
      <div class="skill-level">${label} — ${level}%</div>
    `;
    grid.appendChild(card);
  });
}

/** Génère les cartes de projets */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  projects.forEach(({ emoji, color, title, tags, desc, link }) => {
    const tagsHTML = tags
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");

    const card = document.createElement("div");
    card.className = "project-card reveal";
    card.innerHTML = `
      <div class="project-thumb" style="background: ${color}">${emoji}</div>
      <div class="project-body">
        <div class="project-tags">${tagsHTML}</div>
        <div class="project-title">${title}</div>
        <div class="project-desc">${desc}</div>
        <a href="${link}" class="project-link">Voir le projet →</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

/** Génère les cartes de formations complémentaires */
function renderCertifications() {
  const grid = document.getElementById("certif-grid");
  if (!grid) return;

  certifications.forEach(({ icon, title, org, date, desc }) => {
    const card = document.createElement("div");
    card.className = "certif-card reveal";
    card.innerHTML = `
      <div class="certif-icon">${icon || "📜"}</div>
      <div>
        <div class="certif-title">${title}</div>
        <div class="certif-org">${org}</div>
        <div class="certif-date">${date}</div>
        ${desc ? `<div class="certif-desc">${desc}</div>` : ""}
      </div>
    `;
    grid.appendChild(card);
  });
}

/** Anime les barres de compétences au défilement */
function animateSkillBars() {
  const section = document.getElementById("skills");
  if (!section) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".skill-fill").forEach((bar) => {
            bar.style.width = bar.dataset.level + "%";
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
}

/** Fait apparaître en fondu tous les éléments .reveal au défilement */
function initRevealOnScroll() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

/** Marque les éléments à animer au défilement (sections hors hero) */
function markRevealTargets() {
  const selectors = [
    "#about .about-text",
    "#about .about-card",
    "#parcours .section-label",
    "#parcours .section-title",
    "#parcours .section-sub",
    "#parcours .timeline-item",
    "#formations .section-label",
    "#formations .section-title",
    "#formations .section-sub",
    "#skills .section-label",
    "#skills .section-title",
    "#skills .section-sub",
    "#projects .section-label",
    "#projects .section-title",
    "#projects .section-sub",
    "#contact .contact-info",
    "#contact form",
  ];

  selectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      el.classList.add("reveal");
    });
  });
}

/** Navbar façon "headroom" : se cache en descendant, réapparaît en remontant */
function initHeadroomNav() {
  const nav = document.querySelector("nav");
  if (!nav) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function onScroll() {
    const currentScrollY = window.scrollY;

    nav.classList.toggle("nav-scrolled", currentScrollY > 8);

    if (currentScrollY > lastScrollY && currentScrollY > 120) {
      nav.classList.add("nav-hidden");
    } else {
      nav.classList.remove("nav-hidden");
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  });
}

/** Bouton flottant de retour en haut de page */
function initBackToTop() {
  const btn = document.createElement("button");
  btn.className = "back-to-top";
  btn.setAttribute("aria-label", "Retour en haut de la page");
  btn.innerHTML = "↑";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });
}

/* ─── INITIALISATION ────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderCertifications();
  markRevealTargets();
  animateSkillBars();
  initRevealOnScroll();
  initHeadroomNav();
  initBackToTop();
});
