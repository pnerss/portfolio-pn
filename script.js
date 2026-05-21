/* ============================================
   PORTFOLIO — SCRIPT PRINCIPAL
   Auteur  : Paulo Neres
   Version : 1.0
   ============================================ */

/* ─────────────────────────────────────────────
   ✏️  SECTION 1 — VOS COMPÉTENCES
   Modifiez ce tableau pour afficher vos propres
   compétences dans la section "Ce que je sais faire".

   Champs :
     name  → nom de la compétence
     level → pourcentage de maîtrise (0 à 100)
     label → niveau affiché (ex : Expert, Avancé…)
   ───────────────────────────────────────────── */

const skills = [
  { name: "Adressage IP", level: 80, label: "Expert"         },
  { name: "Deppanage", level: 80, label: "Avancé"         },
  { name: "Linux", level: 50, label: "Intermédiaire"  },
  { name: "Cybersecurité", level: 70, label: "Intermédiaire"  },
  { name: "HTML", level: 60, label: "Intermédiaire"         },
  { name: "Compétence 6", level: 65, label: "Intermédiaire"  },
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
    tags:  ["ITop", "Linux"],
    desc:  "Instalation.",
    link:  "#",
  },
  {
    emoji: "🇧🇷",
    color: "#EAF3DE",
    title: "Projet Devellopement",
    tags:  ["HTML", "CSS"],
    desc:  "Site créer du 0 avec html et CSS.",
    link:  "https://pnerss.github.io/projet-bresil",
  },
  {
    emoji: "📱",
    color: "#FAEEDA",
    title: "Situation Profissionnel",
    tags:  ["Suport Informatique", "xxx"],
    desc:  "Situation vécu pendant mon stage."
    ,link: "#",
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

  skills.forEach(({ name, level, label }) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `
      <div class="skill-name">${name}</div>
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
    card.className = "project-card";
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

/* ─── INITIALISATION ────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  animateSkillBars();
});
