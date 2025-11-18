import React, { useMemo, useState } from 'react';
import { ExternalLink, Github, Tag } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  competencies: string[];
  type: 'personal' | 'academic' | 'professional';
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'U-Activity',
    description:
      'Projet Académique visant à créer une application web et mobile permettant aux étudiants de suivre et gérer leurs activités universitaires. L\'application offre une interface intuitive et des fonctionnalités adaptées aux besoins des étudiants. Elle permet également aux admin et aux reponsables d\'activités de gérer les événements et les inscriptions.',
    image: '/uactivity.png',
    technologies: ['React', 'Tailwind CSS', 'NodeJS', 'Express', 'WebSocket', 'MySQL', 'Figma', 'Looping'],
    competencies: ['Développer', 'Optimiser', 'Gérer'],
    demo: 'https://u-activity.abdelrahimriche.com',
    type: 'academic',
  },
  {
    title: 'Wikigame',
    description:
      'WikiGame est un jeu web basé sur Wikipédia. Le but est d’atteindre un article cible en partant d’un article de départ. Pour avancer, on ne peut utiliser que les liens bleus présents dans les pages. Chaque clic est compté, ce qui pousse à trouver le chemin le plus court. Le jeu met en valeur la richesse et la connexion des articles Wikipédia. Il mélange réflexion, stratégie et culture générale. L’interface est développée avec React et TypeScript. Le back-end s’appuie sur Node.js et Express. Un système en WebSocket gère les interactions en temps réel. C’est un projet académique qui illustre mes compétences full-stack.',
    image: '/wikigame.png',
    technologies: ['React', 'TypeScript', 'CSS', 'NodeJS', 'Express', 'WebSocket', 'MongoDB'],
    competencies: ['Développer', 'Optimiser', 'Gérer'],
    demo: 'https://wikigame.abdelrahimriche.com',
    github: 'https://github.com/AbdelRMB/wikigame',
    type: 'academic',
  },
  {
    title: 'New BUT',
    description:
      'Développement d\'un site permettant la présentation d\'une nouvelle filière but informatique re réviser et penser afin d\'intégrer les nouveauté technologique et adapté les étude à la progration et l\'innovation du monde de l\'informatique.',
    image: '/newbut.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    competencies: ['Développer', 'Administrer', 'Gérer'],
    demo: 'https://newbut.abdelrahimriche.com',
    type: 'academic',
  },
  {
    title: 'O.R.B.I.T',
    description:
      'Ce projet s’inscrit dans l’univers Star Wars et dans le cadre de la SAÉ Développement d\'une application. L’objectif est d’aider les utilisateurs à optimiser leurs déplacements interplanétaires selon divers critères tels que la légion d\'appartenance (Rebelle, Empire, Neutre), le nombre de passagers ou encore les vaisseaux préférés. Le projet repose sur la modélisation de réseaux galactiques et inclut des fonctionnalités immersives qui respectent l’esthétique et les codes de l’univers Star Wars. L\'objectif principal est de permettre aux utilisateurs de trouver le meilleur itinéraire entre deux points galactiques en tenant compte de divers critères.',
    image: '/orbit.png',
    technologies: ['PHP', 'CSS', 'HTML', 'JavaScript', 'MySQL'],
    competencies: ['Développer', 'Optimiser', 'Collaborer'],
    github: 'https://github.com/AbdelRMB/O.R.B.I.T',
    // demo: 'https://newbut.abdelrahimriche.com',
    type: 'academic',
  },
  {
    title: 'Séville Unesco',
    description:
      'Projet réaliser en première année de BUT informatique en partenariat avec l\'UNESCO visant à mettre en avant le patrimoine mondial de la ville de Séville.',
    image: '/unesco.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    competencies: ['Développer', 'Conduire', 'Communiquer'],
    github: 'https://github.com/AbdelRMB/unesco',
    demo: 'https://unesco.abdelrahimriche.com',
    type: 'academic',
  },
  {
    title: 'CRM Still-Link',
    description:
      'Développement d\'un CRM complet permettant la gestion de l\'entreprise Still-Link. Il permet la gestion de factures, devis, contracts et bien autres modules facilitant la gestion d\'entreprise. Il est également doté d\'outil permettant la gestion de client d\'employé et de stock.',
    image: '/stilllink.png',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'TypeScript', 'Docker', 'N8N', 'JavaScript'],
    competencies: ['Conduire', 'Gérer', 'Administrer', 'Développer', 'Optimiser', 'Collaborer'],
    demo: 'https://still-link.fr',
    type: 'professional',
  },
  {
    title: 'MyGestion',
    description:
      'Développement d\'un outil de gestion d\'entreprise complet permettant la gestion de factures, devis, contracts et bien autres modules facilitant la gestion d\'entreprise.',
    image: '/mygestion.png',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'TypeScript'],
    competencies: ['Gérer', 'Administrer', 'Développer', 'Optimiser'],
    demo: 'https://mygestion.abdelrahimriche.com',
    type: 'personal',
  },
  {
    title: 'MyProjects',
    description:
      'Développement d\'un outil de gestion de projets complet permettant la gestion de tâches, ressources et délais.',
    image: '/myproject.png',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'JavaScript', 'TypeScript'],
    competencies: ['Gérer', 'Administrer', 'Développer', 'Optimiser'],
    demo: 'https://myprojects.abdelrahimriche.com',
    type: 'personal',
  },
];

export function Projects() {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [selectedComps, setSelectedComps] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const allTechnologies = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, []);

  const allCompetencies = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.competencies.forEach((c) => s.add(c)));
    return Array.from(s).sort();
  }, []);

  const allTypes = useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.type)));
  }, []);

  const techCounts = useMemo(() => {
    const m: Record<string, number> = {};
    projects.forEach((p) => p.technologies.forEach((t) => (m[t] = (m[t] || 0) + 1)));
    return m;
  }, []);

  const compCounts = useMemo(() => {
    const m: Record<string, number> = {};
    projects.forEach((p) => p.competencies.forEach((c) => (m[c] = (m[c] || 0) + 1)));
    return m;
  }, []);

  const typeCounts = useMemo(() => {
    const m: Record<string, number> = {};
    projects.forEach((p) => (m[p.type] = (m[p.type] || 0) + 1));
    return m;
  }, []);

  function toggleIn<T>(arr: T[], value: T) {
    return arr.includes(value) ? arr.filter((a) => a !== value) : [...arr, value];
  }

  const filtered = projects.filter((p) => {
    const techMatch = selectedTechs.length === 0 || p.technologies.some((t) => selectedTechs.includes(t));
    const compMatch = selectedComps.length === 0 || p.competencies.some((c) => selectedComps.includes(c));
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(p.type);
    return techMatch && compMatch && typeMatch;
  });

  const typeColors: Record<string, string> = {
    personal: 'bg-emerald-500 text-emerald-900/95',
    academic: 'bg-indigo-500 text-white',
    professional: 'bg-amber-400 text-amber-900',
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <p className="text-white/60 text-lg">Découvrez mes réalisations et les compétences mises en œuvre</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="text-white/70 text-sm">Filtrer par :</div>

              <div className="flex items-center gap-2 flex-wrap">
                {allTypes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTypes((s) => toggleIn(s, t))}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors border flex items-center gap-2 ${selectedTypes.includes(t) ? 'bg-white/10 border-white/20' : 'bg-white/2 border-white/5'} text-white/90`}
                    aria-pressed={selectedTypes.includes(t)}
                  >
                    <span className="capitalize">{t}</span>
                    <span className="ml-1 text-xs bg-white/8 px-2 py-0.5 rounded-full text-white/80">{typeCounts[t] ?? 0}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSelectedTechs([]);
                  setSelectedComps([]);
                  setSelectedTypes([]);
                }}
                className="text-sm px-3 py-1 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-95 text-white transition shadow-md"
              >
                Réinitialiser
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <div className="text-sm text-white/50 mb-2">Technologies</div>
              <div className="flex flex-wrap gap-2">
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTechs((s) => toggleIn(s, tech))}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border flex items-center gap-2 ${selectedTechs.includes(tech) ? 'bg-blue-500/25 border-blue-400 text-blue-100' : 'bg-white/3 border-white/10 text-white/70'}`}
                    aria-pressed={selectedTechs.includes(tech)}
                  >
                    <span>{tech}</span>
                    <span className="text-[10px] bg-white/6 px-1.5 py-0.5 rounded-full">{techCounts[tech] ?? 0}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm text-white/50 mb-2">Compétences</div>
              <div className="flex flex-wrap gap-2">
                {allCompetencies.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedComps((s) => toggleIn(s, c))}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border flex items-center gap-2 ${selectedComps.includes(c) ? 'bg-cyan-500/25 border-cyan-400 text-cyan-100' : 'bg-white/3 border-white/10 text-white/70'}`}
                    aria-pressed={selectedComps.includes(c)}
                  >
                    <span>{c}</span>
                    <span className="text-[10px] bg-white/6 px-1.5 py-0.5 rounded-full">{compCounts[c] ?? 0}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 animate-float relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Type badge top-left */}
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 shadow-sm ring-1 ring-white/5 ${typeColors[project.type] ?? 'bg-gray-500 text-white'} z-10`}>
                <Tag size={14} />
                <span className="capitalize">{project.type}</span>
              </div>

              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm">{project.description}</p>

                <div className="mb-4">
                  <div className="text-sm text-white/50 mb-2">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-white/50 mb-2">Compétences:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.competencies.map((comp, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs text-cyan-300">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-sm">
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all text-sm">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 p-6 bg-white/3 border border-white/8 rounded-lg text-center">
            <p className="text-white/70 mb-3">Aucun projet ne correspond aux filtres sélectionnés.</p>
            <button
              onClick={() => {
                setSelectedTechs([]);
                setSelectedComps([]);
                setSelectedTypes([]);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-sm font-medium shadow-lg"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
